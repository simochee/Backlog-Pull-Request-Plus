import styles from "./index.module.css";

export default defineContentScript({
	matches: ["https://*.backlog.com/git/*", "https://*.backlog.jp/git/*"],
	allFrames: true,
	main() {
		if (!shouldRunScript()) return;

		const handleAppearElement = (el: HTMLElement) => {
			el.classList.add(styles.scrollPullRequest);

			// ヘッダーの高さを CSS カスタム値として body に設定する
			const observer = new ResizeObserver((entries) => {
				for (const entry of entries) {
					const [{ blockSize }] = entry.contentBoxSize;

					document.body.style.setProperty(
						"--bprplus-scroll-pull-request-header",
						`${blockSize}px`,
					);
				}
			});
			observer.observe(el);

			// テキストを省略してしまう要素にタイトル属性を付与
			const targetElements = Array.from(
				el.querySelectorAll(
					":where(.content-header__pull-req-summary, .dropdown-link)",
				),
			).filter((target) => target instanceof HTMLElement);

			for (const target of targetElements) {
				const observer = new MutationObserver(() => {
					target.title =
						target.textContent?.replace(/[ \n]+/g, " ").trim() || "";
				});
				observer.observe(target, {
					characterData: true,
					subtree: true,
					childList: true,
				});
			}
		};

		const scrollPullRequest = document.getElementById("scroll-pull-request");
		if (scrollPullRequest instanceof HTMLElement) {
			handleAppearElement(scrollPullRequest);
		}
	},
});

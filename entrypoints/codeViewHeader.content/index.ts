import styles from "./index.module.css";
import { renderCodeViewAction } from "./renderCodeViewAction";

export default defineContentScript({
	matches: ["https://*.backlog.com/git/*", "https://*.backlog.jp/git/*"],
	allFrames: true,
	async main() {
		await waitForLoaded();

		// details の summary がクリックされたときにスクロール位置を調整
		document.addEventListener("click", (e) => {
			const summary =
				e.target instanceof HTMLElement && e.target.closest("summary");
			const details =
				summary instanceof HTMLElement && summary.closest("details");

			if (
				!summary ||
				!details ||
				!summary.classList.contains("code-view__header")
			)
				return;

			const { top } = details.getBoundingClientRect();
			const scrollMargin = details.computedStyleMap().get("scroll-margin-top");
			const scrollMarginValue =
				scrollMargin instanceof CSSUnitValue ? scrollMargin.value : 0;

			if (top - scrollMarginValue < 1) {
				details.scrollIntoView({ block: "start" });
			}
		});

		// details に offset-margin-top を付与する
		for (const codeViewDetails of document.getElementsByClassName(
			"code-view__details",
		)) {
			const codeViewHeaderContent = codeViewDetails.querySelector(
				".code-view__header-content",
			);
			const codeViewHeaderPath = codeViewDetails.querySelector(
				".code-view__header-path",
			);
			const codeViewHeaderAction = codeViewDetails.querySelector(
				".code-view__header-action",
			);

			if (
				!(codeViewDetails instanceof HTMLElement) ||
				!(codeViewHeaderContent instanceof HTMLElement) ||
				!(codeViewHeaderPath instanceof HTMLElement) ||
				!(codeViewHeaderAction instanceof HTMLAnchorElement)
			) {
				continue;
			}

			codeViewDetails.classList.add(styles.details);

			// アクションボタンを描画
			renderCodeViewAction(
				codeViewHeaderContent,
				codeViewHeaderAction.href,
				codeViewHeaderPath.textContent,
			);

			// 省略するファイルパスに title 属性を付与する
			const filePath =
				codeViewHeaderPath.textContent?.replace(/[ \n]+/g, " ").trim() || "";
			codeViewHeaderPath.title = filePath;
			codeViewDetails.dataset.filePath = filePath;
		}
	},
});

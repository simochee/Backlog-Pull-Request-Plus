import { asyncQuerySelector } from "@/utils/dom";
import styles from "./index.module.css";

export const patchHeader = async () => {
	const headerEl = await asyncQuerySelector("#scroll-pull-request", {
		timeout: 9999,
	});

	if (!(headerEl instanceof HTMLElement)) return;

	headerEl.classList.add(styles.header);
	const observer = new ResizeObserver((entries) => {
		for (const entry of entries) {
			const [{ blockSize }] = entry.contentBoxSize;

			document.body.style.setProperty(
				"--scroll-pull-request-height",
				`${blockSize}px`,
			);
		}
	});
	observer.observe(headerEl);

	const summaryEl = headerEl.querySelector(".content-header__summary");

	if (!summaryEl) return;

	summaryEl.classList.toggle(styles.summary, true);

	// 隠れてしまう要素にタイトル属性を付与
	for (const el of document.querySelectorAll(
		":where(.content-header__pull-req-summary, .dropdown-link)",
	)) {
		if (!(el instanceof HTMLElement)) return;

		const observer = new MutationObserver(() => {
			el.title = el.textContent?.replace(/[ \n]+/g, " ").trim() || "";
		});
		observer.observe(el, {
			characterData: true,
			subtree: true,
			childList: true,
		});
	}
};

import { asyncQuerySelector } from "@/utils/dom";
import styles from "./index.module.css";

export const patchHeader = async () => {
	const summaryEl = await asyncQuerySelector(".content-header__summary");

	if (!summaryEl) return;

	summaryEl.classList.toggle(styles.summary, true);

	// 隠れてしまう要素にタイトル属性を付与
	for (const el of document.querySelectorAll(
		":where(.content-header__pull-req-summary, .dropdown-link)",
	)) {
		if (!(el instanceof HTMLElement)) return;

		const observer = new MutationObserver(() => {
			console.log("called!");
			el.title = el.textContent?.replace(/[ \n]+/g, " ").trim() || "";
		});
		observer.observe(el, {
			characterData: true,
			subtree: true,
			childList: true,
		});
	}
};

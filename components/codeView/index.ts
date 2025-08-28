import { isChecked, setChecked } from "@/utils/store";
import styles from "./index.module.css";

export const patchCodeView = async () => {
	document.addEventListener("click", (e) => {
		const summary =
			e.target instanceof HTMLElement ? e.target.closest("summary") : null;

		if (!summary || !summary.classList.contains("code-view__header")) return;

		const details = summary.closest("details");

		if (!details) return;

		const { top } = details.getBoundingClientRect();
		const scrollMargin = details.computedStyleMap().get("scroll-margin-top");
		const scrollMarginValue =
			scrollMargin instanceof CSSUnitValue ? scrollMargin.value : 0;

		if (top - scrollMarginValue < 1) {
			details.scrollIntoView({ block: "start" });
		}
	});

	const anyDetailsEl = await asyncQuerySelector(".code-view__details", {
		timeout: 99999,
	});
	const detailsElements =
		anyDetailsEl?.parentElement?.parentElement?.querySelectorAll(
			".code-view__details",
		);

	if (!detailsElements) return;

	for (const detailsEl of detailsElements) {
		if (!(detailsEl instanceof HTMLDetailsElement)) continue;

		detailsEl.classList.toggle(styles.details, true);

		for (const el of matchNode(".code-view__header-path", detailsEl)) {
			const filePath = el.textContent?.replace(/[ \n]+/g, " ").trim() || "";
			el.title = filePath;
			detailsEl.dataset.filePath = filePath;
		}

		for (const el of matchNode(
			".code-view__header-action",
			detailsEl,
			HTMLAnchorElement,
		)) {
			el.classList.toggle(styles.actionButton, true);
			el.ariaLabel = el.textContent;
			el.innerHTML = "";

			// レビューボタンの追加
			const button = document.createElement("button");
			button.classList.toggle(styles.checkButton, true);
			button.textContent = "Viewed";
			const checked = isChecked(detailsEl.dataset.filePath);
			button.ariaChecked = checked.toString();

			if (checked && detailsEl.open) {
				detailsEl.querySelector("summary")?.click();
			}

			button.addEventListener("click", (e) => {
				e.preventDefault();
				e.stopPropagation();

				if (!(e.currentTarget instanceof HTMLButtonElement)) return;

				const checked = e.currentTarget.ariaChecked === "true";
				e.currentTarget.ariaChecked = (!checked).toString();
				setChecked(detailsEl.dataset.filePath, !checked);

				const summaryEl = detailsEl.querySelector("summary");
				const open = detailsEl?.open ?? false;
				if (summaryEl && checked !== open) {
					summaryEl.click();

					// requestAnimationFrame(() => {
					//     const scrollEl = document.getElementById('scroll-pull-request')
					//     const cssTop = scrollEl?.computedStyleMap().get('top')
					//     const topValue = cssTop instanceof CSSUnitValue ? cssTop.value : 50;
					//     const height = scrollEl?.getBoundingClientRect().height || 0;
					//     const offsetTop = (summaryEl?.closest('.code-view')?.getBoundingClientRect().top || 0) + window.scrollY;
					//
					//     if ((summaryEl?.closest('.code-view')?.getBoundingClientRect().top || 0) > topValue + height) {
					//         return;
					//     }
					//
					//     console.log(topValue, height, offsetTop);
					//
					//     window.scrollTo({ top: offsetTop - topValue - height });
					//
					// 	// summaryEl.scrollIntoView({ block: "center" });
					// });
				}
			});
			el.insertAdjacentElement("afterend", button);
		}
	}
};

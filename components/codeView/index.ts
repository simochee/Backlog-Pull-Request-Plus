import { isChecked, setChecked } from "@/utils/store";
import styles from "./index.module.css";

export const patchCodeView = async () => {
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

		for (const el of matchNode(".code-view__header", detailsEl)) {
			el.classList.toggle(styles.summary, true);
		}

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
				}
			});
			el.insertAdjacentElement("afterend", button);
		}
	}
};

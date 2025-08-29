import styles from "./codeViewLayout.module.css";

export const patchCodeViewLayout = (fileTreeRootEl: HTMLElement) => {
	const modeButtonsWrapEl = document.querySelector(
		".code-view-mode-buttons-wrap",
	);
	const codeViewListEl = modeButtonsWrapEl?.nextElementSibling;
	const containerEl = modeButtonsWrapEl?.parentElement;

	if (
		!(modeButtonsWrapEl instanceof HTMLElement) ||
		!(codeViewListEl instanceof HTMLElement) ||
		!(containerEl instanceof HTMLElement)
	) {
		return;
	}

	const wrapperEl = document.createElement("div");
	wrapperEl.classList.add(styles.codeViewLayout);

	fileTreeRootEl.classList.add(styles.sidebar);

	wrapperEl.appendChild(fileTreeRootEl);
	wrapperEl.appendChild(modeButtonsWrapEl);
	wrapperEl.appendChild(codeViewListEl);

	containerEl.appendChild(wrapperEl);
};

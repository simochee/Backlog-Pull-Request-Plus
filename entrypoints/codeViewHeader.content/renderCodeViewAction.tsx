import { createRoot } from "react-dom/client";
import { CodeViewAction } from "./CodeViewAction";
import styles from "./index.module.css";

export const renderCodeViewAction = (
	containerEl: HTMLElement,
	fileUrl: string,
	filePath: string,
) => {
	const rootEl = document.createElement("div");
	rootEl.classList.add(styles.codeViewAction);

	const root = createRoot(rootEl);
	root.render(<CodeViewAction filePath={filePath} fileUrl={fileUrl} />);

	containerEl.appendChild(rootEl);
};

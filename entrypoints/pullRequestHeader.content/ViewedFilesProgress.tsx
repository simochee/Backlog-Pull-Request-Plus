import pDebounce from "p-debounce";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import codeViewActionStyles from "../codeViewHeader.content/CodeViewAction.module.css";
import styles from "./ViewedFilesProgress.module.css";

export const ViewedFilesProgress = () => {
	const [filesCount, setFilesCount] = useState(0);
	const [viewedFilesCount, setViewedFilesCount] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);

	const updateProgress = pDebounce(() => {
		const viewedButtons = Array.from(
			document.getElementsByClassName(codeViewActionStyles.viewedButton),
		);
		const viewedFilesCount = viewedButtons.filter(
			(el) => el.ariaChecked === "true",
		).length;

		setFilesCount(viewedButtons.length);
		setViewedFilesCount(viewedFilesCount);
	}, 100);

	const progress =
		viewedFilesCount === 0 ? "0%" : `${(viewedFilesCount / filesCount) * 100}%`;
	const circleBackground = `conic-gradient(var(--defaultColorAccent) 0%, var(--defaultColorAccent) ${progress}, var(--backgroundColorBase) ${progress}, var(--backgroundColorBase) 100%)`;

	useEffect(() => {
		waitForLoaded().then(() => {
			setIsLoaded(true);
		});
	}, []);

	useEffect(() => {
		if (!isLoaded) return;

		updateProgress();

		const observer = new MutationObserver(() => updateProgress());
		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ["aria-checked"],
		});

		return () => observer.disconnect();
	}, [isLoaded, updateProgress]);

	if (filesCount === 0) return null;

	return (
		<div className={styles.container}>
			<div className={styles.circle} style={{ background: circleBackground }} />
			<div className={styles.text}>
				{i18n.t("filesViewed", [viewedFilesCount, filesCount])}
			</div>
		</div>
	);
};

export const renderViewedFilesProgress = () => {
	const rootEl = document.createElement("div");
	rootEl.classList.add(styles.root);

	const root = createRoot(rootEl);

	root.render(<ViewedFilesProgress />);

	return rootEl;
};

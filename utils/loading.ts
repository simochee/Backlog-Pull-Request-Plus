export const waitForLoaded = () =>
	new Promise<void>((resolve) => {
		const observer = new MutationObserver((mutations) => {
			const el = mutations.find(
				({ type, target }) =>
					type === "attributes" &&
					target instanceof HTMLElement &&
					target.classList.contains("tab-loading-wrapper__mask"),
			);

			if (el) {
				observer.disconnect();
				resolve();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ["style"],
		});
	});

export const matchNode = <T extends HTMLElement>(
	selector: string,
	node: Node = document.body,
	elementType = HTMLElement,
): T[] => {
	if (!(node instanceof HTMLElement)) {
		return [];
	}

	return Array.from(node.ownerDocument.querySelectorAll(selector))
		.filter((el): el is T => el instanceof elementType)
		.filter((el) => node.contains(el));
};

export const asyncQuerySelector = (
	selector: string,
	options: {
		target?: HTMLElement;
		timeout?: number;
		signal?: AbortSignal;
	} = {},
) =>
	new Promise<HTMLElement | null>((resolve) => {
		const target = options.target || document.documentElement;
		const timeout = options.timeout ?? 5000;

		const elements = matchNode(selector, target);

		for (const el of elements) {
			resolve(el);
			return;
		}

		const timer = setTimeout(() => {
			observer.disconnect();
			resolve(null);
		}, timeout);

		options.signal?.addEventListener("abort", () => {
			observer.disconnect();
			clearTimeout(timer);
			resolve(null);
		});

		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.type === "childList") {
					for (const node of mutation.addedNodes) {
						for (const el of matchNode(selector, node)) {
							clearTimeout(timer);
							resolve(el);
							return;
						}
					}

					for (const node of mutation.removedNodes) {
						for (const el of matchNode(selector, node)) {
							clearTimeout(timer);
							resolve(el);
							return;
						}
					}
				}
			}
		});

		observer.observe(target, { childList: true, subtree: true });
	});

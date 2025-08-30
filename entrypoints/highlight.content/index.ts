import hljs from "highlight.js/lib/common";
import { checkLanguageSupport, loadAllLanguages } from "./highlightjs";
import "highlight.js/styles/vs.css";

export default defineContentScript({
	matches: ["https://*.backlog.com/git/*", "https://*.backlog.jp/git/*"],
	allFrames: true,
	async main() {
		if (!shouldRunScript()) return;

		await waitForLoaded();

		await loadAllLanguages();

		const renderLineSources = async (
			lineSrcElements: Element[] | HTMLCollectionOf<Element>,
		) => {
			for (const el of lineSrcElements) {
				const span = Array.from(el.children).find(
					(node) => node instanceof HTMLSpanElement,
				);
				const details = el.closest("details");

				if (!span || span.dataset.highlighted === "true" || !details) continue;

				const lang = details.dataset.filePath?.split(".").pop() || "";
				const sourceCode = span.textContent || "";

				try {
					const isSupported = checkLanguageSupport(lang);

					if (!isSupported) continue;

					const html = hljs.highlight(sourceCode, { language: lang }).value;

					span.innerHTML = html;
				} catch {
					// display plain text
				}
			}
		};

		renderLineSources(document.getElementsByClassName("Line-src"));

		const observer = new MutationObserver((mutations) => {
			const lineSrcElements = mutations
				.flatMap(({ addedNodes }) => Array.from(addedNodes))
				.filter((node) => node instanceof HTMLElement)
				.flatMap((el) => {
					if (el.classList.contains("Line-src")) {
						return [el];
					}

					return Array.from(el.getElementsByClassName("Line-src"));
				});

			renderLineSources(lineSrcElements);
		});
		observer.observe(document.body, { childList: true, subtree: true });
	},
});

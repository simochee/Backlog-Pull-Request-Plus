import styles from "./index.module.css";

export default defineContentScript({
	matches: ["https://*.backlog.com/git/*", "https://*.backlog.jp/git/*"],
	allFrames: true,
	main() {
		if (!shouldRunScript()) return;

		document.body.classList.add(styles.global);
	},
});

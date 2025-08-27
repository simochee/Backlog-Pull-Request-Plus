import { patchCodeView } from "@/components/codeView";
import { patchHeader } from "@/components/header";

export default defineContentScript({
	matches: ["https://*.backlog.com/git/*", "https://*.backlog.jp/git/*"],
	async main() {
		await Promise.allSettled([patchHeader(), patchCodeView()]);
	},
});

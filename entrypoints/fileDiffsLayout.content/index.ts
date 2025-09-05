import { patchCodeViewLayout } from "./codeViewLayout";
import { renderFileTree } from "./FileTree";
import { patchUpdatedFile } from "./updatedFile";

export default defineContentScript({
	matches: ["https://*.backlog.com/git/*", "https://*.backlog.jp/git/*"],
	allFrames: true,
	async main() {
		if (!shouldRunScript()) return;

		await waitForLoaded();

		const { updatedFiles } = patchUpdatedFile();
		const fileTreeRootEl = renderFileTree(updatedFiles);

		patchCodeViewLayout(fileTreeRootEl);
	},
});

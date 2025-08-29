import { createRoot } from "react-dom/client";
import { FileTree } from "./FileTree";
import type { UpdatedFile } from "./types";

export const renderFileTree = (updatedFiles: UpdatedFile[]) => {
	const rootEl = document.createElement("div");
	const root = createRoot(rootEl);

	root.render(<FileTree updatedFiles={updatedFiles} />);

	return rootEl;
};

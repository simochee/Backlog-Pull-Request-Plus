import type { FileTreeNode, UpdatedFile } from "./types";

const buildFileTreeFromPaths = (
	updatedFiles: UpdatedFile[],
): FileTreeNode[] => {
	const root: FileTreeNode[] = [];

	updatedFiles.forEach(({ path, type, href }) => {
		const parts = path.split("/");
		let currentLevel: FileTreeNode[] = root;

		parts.forEach((part) => {
			const existingNode = currentLevel.find((node) => node.name === part);

			if (existingNode) {
				currentLevel = existingNode.children;
			} else {
				const newNode: FileTreeNode = {
					name: part,
					updateType: type,
					fullPath: path,
					href,
					children: [],
				};

				currentLevel.push(newNode);

				if (newNode.children) {
					currentLevel = newNode.children;
				}
			}
		});
	});

	return root;
};

export const optimizeFileTree = (
	fileTreeNodes: FileTreeNode[],
): FileTreeNode[] => {
	for (const node of fileTreeNodes) {
		if (node.children.length !== 0) {
			node.children = optimizeFileTree(node.children);
		}

		// 現在のノードがディレクトリで、かつ子が1つのディレクトリである限り結合を繰り返す
		while (
			node.children &&
			node.children.length === 1 &&
			node.children[0].children.length > 0 // 子がファイルではなくディレクトリであること
		) {
			const child = node.children[0];
			// 名前を結合 (例: "parent" と "child" -> "parent/child")
			node.name = `${node.name}/${child.name}`;
			// 子を孫に置き換え
			node.children = child.children;
		}
	}

	return fileTreeNodes;
};

export const buildFileTree = (updatedFiles: UpdatedFile[]): FileTreeNode[] => {
	const fileTree = buildFileTreeFromPaths(updatedFiles);
	return optimizeFileTree(fileTree);
};

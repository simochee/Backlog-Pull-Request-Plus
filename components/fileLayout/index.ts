import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { FileTree, type FileTreeNode } from "@/components/FileTree";
import styles from "./index.module.css";

const buildTreeFromPaths = (
	paths: { path: string; changes: FileTreeNode["changes"] }[],
): FileTreeNode[] => {
	const root: FileTreeNode[] = [];

	paths.forEach(({ path, changes }) => {
		const parts = path.split("/");
		let currentLevel: FileTreeNode[] = root;

		parts.forEach((part) => {
			const existingNode = currentLevel.find((node) => node.name === part);

			if (existingNode) {
				currentLevel = existingNode.children;
			} else {
				const newNode: FileTreeNode = {
					name: part,
					path,
					changes,
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

function optimizeTree(nodes: FileTreeNode[]) {
	nodes.forEach((node) => {
		// 再帰的に子のノードを先に最適化
		if (node.children.length !== 0) {
			node.children = optimizeTree(node.children);
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
	});

	return nodes;
}

export const patchFileLayout = async () => {
	const [title, updatedListItem, codeReviewModeButtons] = await Promise.all([
		asyncQuerySelector("h4.title.-updated-list", { timeout: 99999 }),
		asyncQuerySelector(".updated-list__item", { timeout: 99999 }),
		asyncQuerySelector(".code-view-mode-buttons-wrap", { timeout: 99999 }),
	]);
	const changeSet = codeReviewModeButtons?.nextElementSibling;

	title?.remove();

	const files = Array.from(
		updatedListItem?.parentElement?.getElementsByClassName(
			"updated-list__item",
		) || [],
	).map((el) => ({
		path:
			el.querySelector(".updated-list__path :where(a, del)")?.textContent || "",
		changes: el.querySelector(".pill--updated-A")
			? ("added" as const)
			: el.querySelector(".pill--updated-M")
				? ("modified" as const)
				: ("deleted" as const),
	}));
	const tree = optimizeTree(buildTreeFromPaths(files));
	updatedListItem?.parentElement?.remove();

	if (
		!(codeReviewModeButtons instanceof HTMLElement) ||
		!(changeSet instanceof HTMLElement)
	)
		return;

	codeReviewModeButtons.classList.toggle(styles.buttons, true);
	changeSet.classList.toggle(styles.changeset, true);

	const wrapper = document.createElement("div");
	wrapper.classList.toggle(styles.wrapper, true);

	const sidebar = document.createElement("div");
	sidebar.classList.toggle(styles.sidebar, true);

	const root = createRoot(sidebar);
	const component = createElement(FileTree, { fileTreeNodes: tree });
	root.render(component);

	codeReviewModeButtons.parentElement?.appendChild(wrapper);
	wrapper.appendChild(sidebar);
	wrapper.appendChild(codeReviewModeButtons);
	wrapper.appendChild(changeSet);
};

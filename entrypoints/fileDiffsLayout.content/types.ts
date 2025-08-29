export type UpdateType = "added" | "modified" | "deleted";

export type UpdatedFile = {
	type: UpdateType;
	href: string;
	path: string;
};

export type FileTreeNode = {
	name: string;
	updateType: UpdateType;
	fullPath: string;
	href: string;
	children: FileTreeNode[];
};

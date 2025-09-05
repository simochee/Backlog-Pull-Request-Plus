import {
	IconLayoutSidebarLeftCollapse,
	IconLayoutSidebarLeftExpandFilled,
	IconMessage2,
	IconSquareRoundedChevronUp,
	IconSquareRoundedPlus,
	IconSquareRoundedX,
} from "@tabler/icons-react";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { createRoot } from "react-dom/client";
import { buildFileTree } from "./buildFileTree";
import styles from "./FileTree.module.css";
import { IconButton } from "./IconButton";
import type { FileTreeNode, UpdatedFile } from "./types";

type Props = {
	updatedFiles: UpdatedFile[];
};

export const FileTree: React.FC<Props> = ({ updatedFiles }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const fileTreeNodes = buildFileTree(
		updatedFiles.filter(
			({ path }) => searchTerm === "" || path.includes(searchTerm),
		),
	);

	const handleClick = (href: string) => {
		const name = href.replace(/^#/, "");

		document
			.querySelector(`[name="${CSS.escape(name)}"] ~ .code-view__details`)
			?.scrollIntoView({ block: "start" });
	};

	const renderFileTree = (nodes: FileTreeNode[]) => {
		return nodes.map(
			({ name, fullPath, updateType, href, comments, children }) => (
				<Fragment key={fullPath}>
					{children.length > 0 ? (
						<details className={styles.details} open>
							<summary
								className={styles.summary}
								title={name}
								data-blg-git-folder-icon={name}
							>
								{name}
							</summary>
							<div className={styles.treeContent}>
								{renderFileTree(children)}
							</div>
						</details>
					) : (
						<div>
							<button
								type="button"
								className={styles.file}
								title={name}
								disabled={updateType === "deleted"}
								onClick={() => handleClick(href)}
							>
								<span className={styles.fileName} data-blg-git-file-icon={name}>
									{name}
								</span>
								<span className={styles.icons}>
									{comments > 0 && (
										<IconMessage2
											className={`${styles.icon} ${styles.Comment}`}
										/>
									)}
									{updateType === "added" ? (
										<IconSquareRoundedPlus
											className={`${styles.icon} ${styles.Added}`}
										/>
									) : updateType === "modified" ? (
										<IconSquareRoundedChevronUp
											className={`${styles.icon} ${styles.Modified}`}
										/>
									) : (
										<IconSquareRoundedX
											className={`${styles.icon} ${styles.Deleted}`}
										/>
									)}
								</span>
							</button>
						</div>
					)}
				</Fragment>
			),
		);
	};

	return (
		<div className={styles.container}>
			<div className={clsx(styles.header, { [styles.Collapsed]: isCollapsed })}>
				<div className={clsx({ [styles.Hidden]: isCollapsed })}>
					<input
						className="input-text"
						placeholder={i18n.t("input.filterFilesPlaceholder")}
						defaultValue={searchTerm}
						onChange={(e) => setSearchTerm(e.currentTarget.value)}
					/>
				</div>
				<IconButton onClick={() => setIsCollapsed((v) => !v)}>
					{isCollapsed ? (
						<IconLayoutSidebarLeftExpandFilled size={20} />
					) : (
						<IconLayoutSidebarLeftCollapse size={20} />
					)}
				</IconButton>
			</div>
			<div className={clsx(styles.fileTree, { [styles.Hidden]: isCollapsed })}>
				<div className={styles.scroller}>{renderFileTree(fileTreeNodes)}</div>
			</div>
		</div>
	);
};

export const renderFileTree = (updatedFiles: UpdatedFile[]) => {
	const rootEl = document.createElement("div");
	const root = createRoot(rootEl);

	root.render(<FileTree updatedFiles={updatedFiles} />);

	return rootEl;
};

import { Fragment } from "react";
import styles from "./index.module.css";

export type FileTreeNode = {
	name: string;
	changes: "added" | "modified" | "deleted";
	path: string;
	children: FileTreeNode[];
};

type Props = {
	fileTreeNodes: FileTreeNode[];
};

export const FileTree: React.FC<Props> = ({ fileTreeNodes }) => {
	const handleClick = (path: string) => {
		const el = document.querySelector(`[data-file-path="${CSS.escape(path)}"]`);
		el?.scrollIntoView({ block: "start" });
	};

	const renderTree = (nodes: FileTreeNode[]) => {
		return (
			<>
				{nodes.map(({ name, path, changes, children }) => (
					<Fragment key={path}>
						{children.length > 0 ? (
							<details className={styles.details} open>
								<summary
									className={styles.summary}
									title={name}
									data-bprplus-directory={name}
								>
									{name}
								</summary>
								<div className={styles.treeContent}>{renderTree(children)}</div>
							</details>
						) : (
							<div>
								<button
									type="button"
									className={styles.file}
									title={name}
									disabled={changes === "deleted"}
									onClick={() => handleClick(path)}
								>
									<span className={styles.fileName} data-bprplus-file={name}>
										{name}
									</span>
									<span
										className={`${styles.icon} ${changes === "added" ? styles.Added : changes === "modified" ? styles.Modified : styles.Deleted}`}
									/>
								</button>
							</div>
						)}
					</Fragment>
				))}
			</>
		);
	};

	return (
		<div className={styles.fileTree}>
			<div className={styles.search}>
				<input className="input-text" placeholder="変更ファイルの絞り込み" />
			</div>
			<div className={styles.content}>{renderTree(fileTreeNodes)}</div>
		</div>
	);
};

import {
	IconExternalLink,
	IconSquare,
	IconSquareCheckFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import { IconButton } from "../fileDiffsLayout.content/IconButton";
import styles from "./CodeViewAction.module.css";

const STORAGE_NAME = "bprplus_store_checked";
const keyPrefix = location.pathname.split("/").slice(0, 6).join("/");

const isChecked = (key: string): boolean => {
	try {
		const value = JSON.parse(localStorage.getItem(STORAGE_NAME) || "{}");

		return key in value && value[key] === true;
	} catch (err) {
		console.error(err);

		localStorage.removeItem(STORAGE_NAME);
		return false;
	}
};

const setChecked = (key: string, state: boolean): void => {
	try {
		let value = JSON.parse(localStorage.getItem(STORAGE_NAME) || "{}");

		if (typeof value !== "object" || value === null) {
			value = {};
		}

		localStorage.setItem(
			STORAGE_NAME,
			JSON.stringify({ ...value, [key]: state }),
		);
	} catch (err) {
		console.error(err);
	}
};

type Props = {
	fileUrl: string;
	filePath: string;
};

export const CodeViewAction: React.FC<Props> = ({ filePath, fileUrl }) => {
	const key = `${keyPrefix}/${filePath}`;
	const [isViewed, setIsViewed] = useState(isChecked(key));

	const handleClickViewedButton: React.MouseEventHandler<HTMLButtonElement> = (
		e,
	) => {
		e.stopPropagation();

		const detailsEl = e.currentTarget.closest("details");
		if (detailsEl?.open !== isViewed) {
			requestAnimationFrame(() => {
				detailsEl?.querySelector("summary")?.click();
			});
		}

		setIsViewed((state) => {
			const nextState = !state;

			setChecked(key, nextState);

			return nextState;
		});
	};

	const IconCheck = isViewed ? IconSquareCheckFilled : IconSquare;

	return (
		<div className={styles.actions}>
			<IconButton as="a" href={fileUrl} onClick={(e) => e.stopPropagation()}>
				<IconExternalLink size={20} />
			</IconButton>
			<button
				type="button"
				className={styles.viewedButton}
				aria-checked={isViewed}
				onClick={handleClickViewedButton}
			>
				<IconCheck className={styles.icon} size={20} />
				{i18n.t("button.viewed")}
			</button>
		</div>
	);
};

const STORAGE_NAME = "bprplus_store_checked";
const keyPrefix = location.pathname.split("/").slice(0, 6).join("/");

export const isChecked = (filePath: string | undefined): boolean => {
	try {
		if (!filePath) return false;

		const key = `${keyPrefix}/${filePath}`;
		const value = JSON.parse(localStorage.getItem(STORAGE_NAME) || "{}");

		return key in value && value[key] === true;
	} catch (err) {
		console.error(err);

		localStorage.removeItem(STORAGE_NAME);
		return false;
	}
};

export const setChecked = (
	filePath: string | undefined,
	state: boolean,
): void => {
	try {
		if (!filePath) return;

		const key = `${keyPrefix}/${filePath}`;
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

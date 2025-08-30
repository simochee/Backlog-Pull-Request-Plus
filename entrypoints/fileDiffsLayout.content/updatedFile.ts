import type { UpdatedFile } from "./types";

export const patchUpdatedFile = () => {
	const updatedListEl = document.querySelector(".updated-list");

	const updatedFiles = Array.from(updatedListEl?.children || [])
		.filter((el) => el instanceof HTMLLIElement)
		.map((el): UpdatedFile => {
			const type: UpdatedFile["type"] = el.querySelector(".pill--updated-A")
				? "added"
				: el.querySelector(".pill--updated-M")
					? "modified"
					: "deleted";
			const pathEl = el.querySelector(".updated-list__path :where(a, del)");

			return {
				type,
				href: pathEl?.getAttribute("href") || "",
				path: pathEl?.textContent || "",
			};
		});

	return { updatedFiles };
};

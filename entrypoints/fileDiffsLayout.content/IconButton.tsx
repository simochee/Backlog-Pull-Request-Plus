import styles from "./IconButton.module.css";

type Props =
	| ({ as?: "button" } & React.ComponentProps<"button">)
	| ({ as: "a" } & React.ComponentProps<"a">);

export const IconButton = ({ as: Component = "button", ...props }: Props) => {
	return (
		// @ts-expect-error
		<Component className={styles.iconButton} {...props} />
	);
};

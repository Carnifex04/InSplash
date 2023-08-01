import styles from "./ListView.module.css";

export default function ListView({ children }) {
	return (
		<div id="div">
			<main className={styles.listViewContainer}>{children}</main>
		</div>
	);
}

import styles from "./ListView.module.css";

export default function ListView({ children }) {
	return (
		<div className={styles.container}>
			<main className={styles.listViewContainer}>{children}</main>
		</div>
	);
}

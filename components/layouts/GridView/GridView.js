import styles from "./GridView.module.css";
export default function GridView({ children }) {
	return <div className={styles.gridContainer}>{children}</div>;
}

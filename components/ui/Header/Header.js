import Link from "next/link";
import styles from "./Header.module.css";
export default function Header({ section }) {
	return (
		<header className={styles.headerContainer}>
			<nav className={styles.navContainer}>
				<div>
					<Link href="/" className={styles.logoLink}>
						InSplash
					</Link>
				</div>
				<div className={styles.sectionText}>{section}</div>
				<div>
					<a
						href="https://github.com/Carnifex04/InSplash"
						className={styles.githubLink}
					>
						<div>GitHub</div>
					</a>
				</div>
			</nav>
		</header>
	);
}

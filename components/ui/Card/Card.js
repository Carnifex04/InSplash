import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Card.module.css";

export default function Card({
	creditUrl,
	imgAlt = "placeholder",
	imgSrc = "/placeholder.jpg",
	profileImage = "/placeholder.jpg",
	shotBy,
	username,
	description,
	alt_description = "",
	likes,
	newLimit,
	isLast,
}) {
	/**
	 * Select the Card component with useRef
	 */
	const cardRef = useRef();

	/**
	 * Implement Intersection Observer to check if the last Card in the array is visible on the screen, then set a new limit
	 */
	useEffect(() => {
		if (!cardRef?.current) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (isLast && entry.isIntersecting) {
				newLimit();
				observer.unobserve(entry.target);
			}
		});

		observer.observe(cardRef.current);
	}, [isLast]);

	return (
		<div className={styles.cardContainer} ref={cardRef}>
			<div
				href={creditUrl}
				target="_blank"
				style={{ textDecoration: "none" }}
			>
				<div className={styles.imageContainer}>
					<img
						className={styles.cardImage}
						src={imgSrc}
						alt={imgAlt}
					/>
				</div>
				<div className={styles.cardDescription}>
					{description ? description : alt_description}
				</div>
				<div className={styles.likesUsernameContainer}>
					<span className={styles.likesText}>{likes} ❤</span>
					<Link
						href={`/user/${username}`}
						className={styles.usernameLink}
					>
						{shotBy}
					</Link>
				</div>
			</div>
		</div>
	);
}

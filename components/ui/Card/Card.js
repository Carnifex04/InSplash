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
	viewType = "grid",
	section = "profile",
	newLimit,
	isLast,
}) {
	const cardRef = useRef();

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
				<div
					className={`${styles.imageContainer} ${
						viewType === "grid" ? styles.gridCardImage : ""
					}`}
				>
					<img
						className={styles.cardImage}
						src={imgSrc}
						alt={imgAlt}
					/>
				</div>
				{section !== "profile" ? (
					<div className={styles.cardDescription}>
						{description ? description : alt_description}
					</div>
				) : (
					<div></div>
				)}

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

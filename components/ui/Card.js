import { useEffect, useRef } from "react";
import thumbsup from "../../public/thumbsup.svg";
import Link from "next/link";

export default function Card({
	creditUrl,
	imgAlt = "placeholder",
	imgSrc = "/placeholder.jpg",
	profileImage = "/placeholder.jpg",
	shotBy,
	username,
	description,
	alt_description,
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
		<div
			style={{
				boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
				borderRadius: "20px",
				padding: "8px",
				width: "100%",
				backgroundColor: "#fff",
			}}
			ref={cardRef}
		>
			<div
				href={creditUrl}
				target="_blank"
				style={{ textDecoration: "none" }}
			>
				<div
					style={{
						width: "100%",
						height: "24rem",
						position: "relative",
						overflow: "hidden",
						borderRadius: "20px",
					}}
				>
					<img
						src={imgSrc}
						alt={imgAlt}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</div>
				<div style={{ margin: "10px 0 0 14px" }}>
					{description ? description : alt_description}
				</div>
				<div
					style={{
						borderRadius: "0 0 20px 20px",
						padding: "16px",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<span style={{ fontWeight: "600" }}>{likes} ❤</span>
					<Link
						href={`/user/${username}`}
						style={{ fontWeight: "600", textDecoration: "none" }}
					>
						{shotBy}
					</Link>
				</div>
			</div>
		</div>
	);
}

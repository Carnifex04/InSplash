import Link from "next/link";
import styles from "./About.module.css";

export default function About({
	profilePhoto,
	name,
	bio,
	location,
	instagramID,
	likes,
	total_photos,
	followers,
}) {
	return (
		<div className={styles.aboutContainer}>
			<img
				className={styles.profileImage}
				src={profilePhoto}
				alt="Picture of the author"
			/>
			<div className={styles.profileInfo}>
				<div className={styles.profileName}>{name}</div>
				<div className={styles.profileBio}>{bio}</div>
				{location ? (
					<div className={styles.locationInfo}>
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							version="1.1"
							aria-hidden="false"
							style={{ marginRight: "8px" }}
						>
							<desc lang="en-US">A map marker</desc>
							<path d="M5.988 15.637C7.313 17.596 9.317 19.717 12 22c2.683-2.283 4.688-4.404 6.013-6.363C19.338 13.679 20 11.867 20 10.2c0-2.5-.804-4.492-2.413-5.975C15.979 2.742 14.117 2 12 2c-2.117 0-3.979.742-5.587 2.225C4.804 5.708 4 7.7 4 10.2c0 1.667.663 3.479 1.988 5.437ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
						</svg>
						{location}
					</div>
				) : (
					<div></div>
				)}
				{instagramID ? (
					<Link
						href={`https://instagram.com/${instagramID}`}
						className={styles.instagramInfo}
					>
						<svg
							width="14"
							height="14"
							//class="VRrV5"
							viewBox="0 0 24 24"
							version="1.1"
							aria-hidden="false"
						>
							<desc lang="en-US">Instagram icon</desc>
							<path d="M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z"></path>
						</svg>
						<span style={{ marginLeft: "10px" }}>
							{instagramID}
						</span>
					</Link>
				) : (
					<div></div>
				)}

				<div className={styles.profileStats}>
					<div className={styles.profileStat}>
						<svg
							style={{ marginRight: "8px" }}
							width="14"
							height="14"
							//class="Gdg38"
							viewBox="0 0 24 24"
							version="1.1"
							aria-hidden="false"
						>
							<desc lang="en-US">A photo</desc>
							<path d="M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1ZM5 18l3.5-4.5 2.5 3 3.5-4.5 4.5 6H5Z"></path>
						</svg>
						{total_photos}
					</div>

					<div className={styles.profileStat}>
						<svg
							style={{ marginRight: "8px" }}
							width="14"
							height="14"
							//class="Gdg38"
							viewBox="0 0 24 24"
							version="1.1"
							aria-hidden="false"
						>
							<desc lang="en-US">A heart</desc>
							<path d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"></path>
						</svg>
						{likes}
					</div>

					<div className={styles.profileStat}>
						<svg
							style={{ marginRight: "8px" }}
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.5 21C21.8807 21 23 19.8807 23 18.5C23 16.1726 21.0482 15.1988 19 14.7917M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3M3.5 21.0001H14.5C15.8807 21.0001 17 19.8808 17 18.5001C17 14.4194 11 14.5001 9 14.5001C7 14.5001 1 14.4194 1 18.5001C1 19.8808 2.11929 21.0001 3.5 21.0001ZM13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
								stroke="#000000"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						{followers}
					</div>
				</div>
			</div>
		</div>
	);
}

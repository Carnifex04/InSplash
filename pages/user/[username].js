import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import GridView from "../../components/layouts/GridView/GridView";
import ListView from "../../components/layouts/ListView/ListView";
import Card from "../../components/ui/Card/Card";
import CardList from "../../components/ui/CardList/CardList";
import About from "../../components/ui/About/About";
import Header from "../../components/ui/Header/Header";

const BASE_URL = `https://api.unsplash.com/users/`;

export default function ProfilePage() {
	const router = useRouter();
	const { username } = router.query;
	// ------- States -------
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);
	//const [profileImage, setProfileImage] = useState("/placeholder.jpg");
	const [info, setInfo] = useState([]);
	const [isGridView, setIsGridView] = useState(true);

	// useEffect(() => {
	// 	console.log("Profile Image Updated:", profileImage);
	// }, [profileImage]);
	// ------- Functions -------
	/**
	 * Fetch images from the Unsplash API and append the results to your `images` array
	 *
	 */
	const toggleViewMode = () => {
		setIsGridView((prev) => !prev);
	};

	const fetchUserInfo = async () => {
		const response = await fetch(
			`${BASE_URL}${username}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
		);
		const data = await response.json();
		console.log(69);
		console.log(data);

		if (data) {
			{
				setInfo(data);
				//console.log(info);
			}
		} else {
			console.error("Error: Invalid response data or results not found.");
		}
	};
	const fetchImages = async () => {
		const response = await fetch(
			`${BASE_URL}${username}/photos?page=${page}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
		);
		const data = await response.json();
		console.log(data);

		if (data && Array.isArray(data)) {
			setImages((prev) => [...prev, ...data]);
		} else {
			console.error("Error: Invalid response data or results not found.");
		}
	};

	// useEffect(() => {
	// 	if (username) {
	// 		// Fetch user profile information when the username is availabl
	// 		fetchImages();
	// 	}
	// }, [username, page]);

	/**
	 * useEffect to trigger the `fetchImages` function whenever `page` updates
	 */
	useEffect(() => {
		fetchUserInfo();
		console.log(1);
	}, []);

	useEffect(() => {
		fetchImages();
	}, [page]);

	// ------- Render -------
	return (
		<>
			<Head>
				<title>InSplash</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Home */}

			<Header section="Profile" />

			<About
				bio={info.bio}
				username={info.username}
				name={info.name}
				location={info.location}
				instagramID={info.instagram_username}
				likes={info.total_likes}
				total_photos={info.total_photos}
				followers={info.followers_count}
				profilePhoto={info?.profile_image?.large}
			/>

			<button
				style={{
					background: "none", // Set the background to none
					border: "none", // Remove the border
					cursor: "pointer", // Show pointer cursor on hover
					padding: 0, // Remove padding
					marginLeft: "20px",
				}}
				onClick={toggleViewMode}
			>
				{!isGridView ? (
					<svg
						width="20"
						height="20"
						viewBox="-5.2 -5.2 62.40 62.40"
						data-name="Layer 1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						stroke="#000000"
						stroke-width="0.0005200000000000001"
						transform="rotate(0)"
					>
						<g id="SVGRepo_bgCarrier" stroke-width="0" />

						<g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke="#CCCCCC"
							stroke-width="0.624"
						/>

						<g id="SVGRepo_iconCarrier">
							<path d="M50,15.52H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H50a2,2,0,0,1,2,2V13.52A2,2,0,0,1,50,15.52Zm-46-4H48V4H4Z" />

							<path d="M50,33.76H2a2,2,0,0,1-2-2V20.24a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V31.76A2,2,0,0,1,50,33.76Zm-46-4H48V22.24H4Z" />

							<path d="M50,52H2a2,2,0,0,1-2-2V38.48a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V50A2,2,0,0,1,50,52ZM4,48H48V40.48H4Z" />
						</g>
					</svg>
				) : (
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8 1C9.65685 1 11 2.34315 11 4V8C11 9.65685 9.65685 11 8 11H4C2.34315 11 1 9.65685 1 8V4C1 2.34315 2.34315 1 4 1H8ZM8 3C8.55228 3 9 3.44772 9 4V8C9 8.55228 8.55228 9 8 9H4C3.44772 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8Z"
							fill="#0F0F0F"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8 13C9.65685 13 11 14.3431 11 16V20C11 21.6569 9.65685 23 8 23H4C2.34315 23 1 21.6569 1 20V16C1 14.3431 2.34315 13 4 13H8ZM8 15C8.55228 15 9 15.4477 9 16V20C9 20.5523 8.55228 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H8Z"
							fill="#0F0F0F"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M23 4C23 2.34315 21.6569 1 20 1H16C14.3431 1 13 2.34315 13 4V8C13 9.65685 14.3431 11 16 11H20C21.6569 11 23 9.65685 23 8V4ZM21 4C21 3.44772 20.5523 3 20 3H16C15.4477 3 15 3.44772 15 4V8C15 8.55228 15.4477 9 16 9H20C20.5523 9 21 8.55228 21 8V4Z"
							fill="#0F0F0F"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20 13C21.6569 13 23 14.3431 23 16V20C23 21.6569 21.6569 23 20 23H16C14.3431 23 13 21.6569 13 20V16C13 14.3431 14.3431 13 16 13H20ZM20 15C20.5523 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 20.5523 15 20V16C15 15.4477 15.4477 15 16 15H20Z"
							fill="#0F0F0F"
						/>
					</svg>
				)}
			</button>

			{isGridView ? (
				<GridView>
					{images.map((image, index) => (
						<Card
							key={image.id}
							imgSrc={image.urls.regular}
							imgAlt={image.alt_description}
							username={image.user.username}
							likes={image.likes}
							profilePhoto={image.user.profile_image.large}
							description={image.description}
							alt_description={image.alt_description}
							isLast={index === images.length - 1}
							newLimit={() => setPage(page + 1)}
						/>
					))}
				</GridView>
			) : (
				<ListView>
					{images.map((image, index) => (
						<CardList
							key={image.id}
							imgSrc={image.urls.regular}
							imgAlt={image.alt_description}
							username={image.user.username}
							likes={image.likes}
							profilePhoto={image.user.profile_image.large}
							description={image.description}
							alt_description={image.alt_description}
							isLast={index === images.length - 1}
							newLimit={() => setPage(page + 1)}
						/>
					))}
				</ListView>
			)}
		</>
	);
}

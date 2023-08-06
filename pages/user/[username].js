import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import GridView from "../../components/layouts/GridView/GridView";
import ListView from "../../components/layouts/ListView/ListView";
import Card from "../../components/ui/Card/Card";
import About from "../../components/ui/About/About";
import Header from "../../components/ui/Header/Header";
import ViewButton from "../../components/ui/ViewButton";

const BASE_URL = `https://api.unsplash.com/users/`;

export default function ProfilePage() {
	const router = useRouter();
	const username = router.query.username;
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);
	const [info, setInfo] = useState([]);
	const [isGridView, setIsGridView] = useState(true);

	// useEffect(() => {
	// 	console.log("Profile Image Updated:", profileImage);
	// }, [profileImage]);

	const toggleViewMode = () => {
		setIsGridView((prev) => !prev);
	};

	const fetchUserInfo = async () => {
		const response = await fetch(
			`${BASE_URL}${username}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
		);
		const data = await response.json();

		if (data) {
			{
				setInfo(data);
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

		if (data && Array.isArray(data)) {
			setImages((prev) => [...prev, ...data]);
		} else {
			console.error("Error: Invalid response data or results not found.");
		}
	};

	useEffect(() => {
		if (username) {
			fetchUserInfo();
			fetchImages();
		}
	}, [username, page]);

	return (
		<div className="main-container">
			<Head>
				<title>InSplash</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
					background: "none",
					border: "none",
					cursor: "pointer",
					padding: 0,
					marginLeft: "20px",
				}}
				onClick={toggleViewMode}
			>
				<ViewButton isGridView={isGridView} />
			</button>

			{isGridView ? (
				<GridView>
					{images.map((image, index) => (
						<Card
							key={image.id}
							imgSrc={image.urls.regular}
							imgAlt={image.alt_description}
							blurHash={image.blur_hash}
							username={image.user.username}
							likes={image.likes}
							profilePhoto={image.user.profile_image.large}
							viewType="grid"
							isLast={index === images.length - 1}
							newLimit={() => setPage(page + 1)}
						/>
					))}
				</GridView>
			) : (
				<ListView>
					{images.map((image, index) => (
						<Card
							key={image.id}
							imgSrc={image.urls.regular}
							imgAlt={image.alt_description}
							blurHash={image.blur_hash}
							username={image.user.username}
							likes={image.likes}
							profilePhoto={image.user.profile_image.large}
							description={image.description}
							alt_description={image.alt_description}
							viewType="list"
							isLast={index === images.length - 1}
							newLimit={() => setPage(page + 1)}
						/>
					))}
				</ListView>
			)}
		</div>
	);
}

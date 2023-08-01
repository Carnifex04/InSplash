import Head from "next/head";
import { useEffect, useState } from "react";
import GridView from "../components/layouts/GridView/GridView";
import Card from "../components/ui/Card/Card";
import Header from "../components/ui/Header/Header";

const BASE_URL = `https://api.unsplash.com/photos/random`;

export default function Home() {
	// ------- States -------
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);

	// ------- Functions -------
	/**
	 * Fetch images from the Unsplash API and append the results to your `images` array
	 */
	const fetchImages = async () => {
		const response = await fetch(
			`${BASE_URL}?count=10&page=${page}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
		);
		const data = await response.json();

		if (data && Array.isArray(data)) {
			setImages((prev) => [...prev, ...data]);
		} else {
			console.error("Error: Invalid response data or results not found.");
		}
	};

	/**
	 * useEffect to trigger the `fetchImages` function whenever `page` updates
	 */
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
			<Header section="Feed" />
			<GridView>
				{images.map((image, index) => (
					<Card
						key={image.id}
						imgSrc={image.urls.regular}
						imgAlt={image.alt_description}
						shotBy={image.user.name}
						username={image.user.username}
						creditUrl={image.links.html}
						likes={image.likes}
						isLast={index === images.length - 1}
						newLimit={() => setPage(page + 1)}
					/>
				))}
			</GridView>
		</>
	);
}

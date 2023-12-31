import Head from "next/head";
import { useEffect, useState } from "react";
import ListView from "../components/layouts/ListView/ListView";
import Card from "../components/ui/Card/Card";
import Header from "../components/ui/Header/Header";

const BASE_URL = `https://api.unsplash.com/photos/random`;

export default function Home() {
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);

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

	useEffect(() => {
		fetchImages();
	}, [page]);

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

			<Header section="Feed" />
			<ListView>
				{images.map((image, index) => (
					<Card
						key={image.id}
						imgSrc={image.urls.regular}
						imgAlt={image.alt_description}
						blurHash={image.blur_hash}
						shotBy={image.user.name}
						username={image.user.username}
						description={image.description}
						alt_description={image.alt_description}
						creditUrl={image.links.html}
						likes={image.likes}
						viewType="list"
						section="feed"
						isLast={index === images.length - 1}
						newLimit={() => setPage(page + 1)}
					/>
				))}
			</ListView>
		</div>
	);
}

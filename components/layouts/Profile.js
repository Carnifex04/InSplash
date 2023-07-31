import Header from "../ui/Header";
import GridView from "./GridView";

export default function Profile({ children }) {
	return (
		<>
			<About
				key={image.id}
				imgSrc={image.urls.regular}
				imgAlt={image.alt_description}
				username={image.user.username}
				likes={image.likes}
				profile_photo={image.user.profile_image.large}
				isLast={index === images.length - 1}
				newLimit={() => setPage(page + 1)}
			/>
			<GridView>{children}</GridView>
		</>
	);
}

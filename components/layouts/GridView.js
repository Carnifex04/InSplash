import Header from "../ui/Header";

export default function GridView({ children }) {
	return (
		<div style={{ backgroundColor: "#f9fafb" }}>
			{/* <Header /> */}
			<main
				style={{
					padding: "1rem", // Equivalent to p-4 in Tailwind CSS
					gap: "1.25rem", // Equivalent to gap-5 in Tailwind CSS
					display: "grid", // Equivalent to grid in Tailwind CSS
					gridTemplateColumns: "repeat(3, minmax(0, 1fr))", // Equivalent to lg:grid-cols-3 in Tailwind CSS
				}}
			>
				{children}
			</main>
		</div>
	);
}

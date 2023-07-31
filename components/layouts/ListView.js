export default function ListView({ children }) {
	return (
		<div style={{ backgroundColor: "#f9fafb" }}>
			{/* <Header /> */}
			<main
				style={{
					padding: "1rem", // Equivalent to p-4 in Tailwind CSS
					gap: "1.25rem", // Equivalent to gap-5 in Tailwind CSS
					display: "flex", // Use flex layout
					flexDirection: "column", // Display children in a single column
				}}
			>
				{children}
			</main>
		</div>
	);
}

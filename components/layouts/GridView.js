import Header from "../ui/Header";

export default function GridView({ children }) {
	const gridStyles = {
		backgroundColor: "#f9fafb",
		padding: "1rem",
		gap: "1.25rem",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
	};

	return (
		<div style={gridStyles}>
			{children}
			{/* CSS Media Queries for different screen sizes */}
			<style>
				{`
			@media (max-width: 1023px) {
			  main {
				grid-template-columns: repeat(2, minmax(280px, 1fr));
			  }
			}
  
			@media (max-width: 767px) {
			  main {
				grid-template-columns: repeat(1, minmax(280px, 1fr));
			  }
			}
		  `}
			</style>
		</div>
	);
}

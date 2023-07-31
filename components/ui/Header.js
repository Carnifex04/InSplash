export default function Header({ section }) {
	return (
		<header
			style={{
				padding: "1rem", // Equivalent to p-4 in Tailwind CSS
				paddingLeft: "2rem", // Equivalent to lg:px-8 in Tailwind CSS
				position: "sticky",
				top: "0",
				backgroundColor: "#f9fafb", // Equivalent to bg-stone-50 in Tailwind CSS
				zIndex: "50", // Equivalent to z-50 in Tailwind CSS
			}}
		>
			<nav
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<div style={{ fontSize: "1.5rem", fontWeight: "600" }}>
						InSplash
					</div>
				</div>
				<div style={{ fontSize: "1.5rem", fontWeight: "600" }}>
					{section}
				</div>
				<div>
					<a href="https://github.com">
						<div>GitHub</div>
					</a>
				</div>
			</nav>
		</header>
	);
}

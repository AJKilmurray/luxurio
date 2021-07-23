import { Link } from "react-router-dom";

function MenuNav({ heading = "Menu", navCategories }) {
	// Menu Categories that can be browsed via the menu navbar
	const categories = Object.values(navCategories);

	return (
		<nav className="menu-nav">
			<div className="container menu-nav-container">
				<div className="menu-nav-header">
					<h3>{heading}</h3>
				</div>
				<ul className="menu-nav-links">
					{/* For each category, display a nav link to the page to display the menu for that category */}
					{categories.map((category, idx) => (
						<Link to={`/menu/category/${category.name}`} className="menu-nav-link" key={idx}>
							{category.name}
						</Link>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default MenuNav;

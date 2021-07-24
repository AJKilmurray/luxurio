import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function MenuNav({ heading = "Menu", navCategories }) {
	// Menu Categories that can be browsed via the menu navbar
	const categories = Object.values(navCategories);
	const [menuNavState, setMenuNavState] = useState(false);

	function toggleNav() {
		const menuNavbarContainer = document.querySelector(".menu-nav-links-container");
		const menuNavbar = document.querySelector(".menu-nav-links");
		if (!menuNavState) {
			menuNavbarContainer.style.height = `${menuNavbar.offsetHeight}px`;
		} else if (menuNavState) {
			menuNavbarContainer.style.height = "0px";
		}
	}

	return (
		<nav className="menu-nav">
			<div className="container menu-nav-container">
				<div className="menu-nav-header">
					<h3>{heading}</h3>
				</div>
				{menuNavState ? (
					<FaTimes
						size={24}
						className="toggle-menu-nav"
						onClick={() => {
							setMenuNavState(!menuNavState);
							toggleNav();
						}}
					/>
				) : (
					<FaBars
						size={24}
						className="toggle-menu-nav"
						onClick={() => {
							setMenuNavState(!menuNavState);
							toggleNav();
						}}
					/>
				)}
				<div class="menu-nav-links-container">
					<ul className="menu-nav-links">
						{/* For each category, display a nav link to the page to display the menu for that category */}
						{categories.map((category, idx) => (
							<Link to={`/menu/category/${category.name}`} className="menu-nav-link" key={idx}>
								{category.name}
							</Link>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default MenuNav;

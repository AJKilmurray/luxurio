import { Link, BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

function MenuNav({ heading, navCategories }) {
	const categories = Object.values(navCategories);
	return (
		<Router>
			<nav className="menu-nav">
				<div className="container menu-nav-container">
					<div className="menu-nav-header">
						<h3>{heading}</h3>
					</div>
					<ul className="menu-nav-links">
						{categories.map((category, idx) => (
							<Link to={`/menu/category/${category.name}`} className="menu-nav-link" key={idx}>
								{category.name}
							</Link>
						))}
					</ul>
				</div>
				<Switch>
					<Route path="/menu/category/:id" children={<DisplayID menuCategories={navCategories} />} />
				</Switch>
			</nav>
		</Router>
	);
}

function DisplayID({ menuCategories }) {
	let { id } = useParams();
	const categories = Object.values(menuCategories);

	return (
		<section className="menu-category-display">
			<div className="container">
				<Link to="/menu" className="menu-return btn">
					Go Back
				</Link>
				<h3 className="menu-category-title">{id} Menu</h3>
				<div className="grid-container category-results">
					{categories.map((category) => {
						if (category.name === id) {
							return category.menu.map((item, idx) => (
								<div className="menu-card" key={idx}>
									<h3>{item.title}</h3>
									<h4>{item.price}</h4>
									<p>{item.text}</p>
								</div>
							));
						}
					})}
				</div>
			</div>
		</section>
	);
}

export default MenuNav;

import { createFactory } from "react";

function MenuOverview({ menuCategories }) {
	const categories = Object.values(menuCategories);
	return (
		<section id="menu-overview">
			<div className="container">
				<article id="menu-of-day" className="menu-article">
					<h3>Menu of The Day</h3>
					<div className="grid-container menu-of-day-content">
						{categories.map((category) => {
							if (category.name !== "drinks") {
								const randomIdx = Math.floor(Math.random() * category.menu.length);
								const item = category.menu[randomIdx];
								return (
									<article className="MOD-item" key={item.meal}>
										<img src={item.image} />
										<h4>{item.meal}</h4>
										<h4>£{item.price}</h4>
										<div className="MOD-item-stats">
											<h5>Calories: {item.calories}</h5>
											<h5>Servings: {item.servings}</h5>
										</div>
									</article>
								);
							}
						})}
					</div>
				</article>
				<article id="menu-statistics"></article>
			</div>
		</section>
	);
}

export default MenuOverview;

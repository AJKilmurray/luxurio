import { Link } from "react-router-dom";

function MenuOverview({ menuCategories }) {
	const categories = Object.values(menuCategories);
	const date = new Date();

	return (
		<section id="menu-overview">
			<div className="container">
				<article id="menu-of-day" className="menu-article">
					<h3 className="menu-article-title">Menu of The Day</h3>
					<h4 className="menu-article-sale">
						<span className="MOD-stat-highlight">50%+</span> Off!
					</h4>
					<div className="grid-container menu-of-day-content">
						{categories.map((category) => {
							if (category.name !== "drinks") {
								const item = category.menu[date.getDay()];
								return (
									<Link to={`/menu/category/${category.name}/${item.id}`} className="MOD-redirect">
										<article className="MOD-item" key={item.meal}>
											<h3>{category.name}</h3>
											<p className="MOD-item-times">
												{category.times.start} - {category.times.end}
											</p>
											<img src={item.image} />
											<div className="MOD-item-info">
												<h4 className="MOD-item-title">{item.meal}</h4>
												<h4 className="MOD-item-price">£{Math.round(Number(item.price)) / 2}</h4>
											</div>
											<div className="MOD-item-stats">
												<h5 className="MOD-stat">
													Calories: <span className="MOD-stat-highlight">{item.calories}</span>
												</h5>
												<h5 className="MOD-stat">
													Servings: <span className="MOD-stat-highlight">{item.servings}</span>
												</h5>
											</div>
										</article>
									</Link>
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

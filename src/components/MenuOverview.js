import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

function MenuOverview({ menuCategories }) {
	const categories = Object.values(menuCategories);
	const date = new Date();

	const breakfast = categories[0].menu[date.getDay() + 1];
	const lunch = categories[1].menu[date.getDay() + 1];
	const dinner = categories[2].menu[date.getDay() + 1];

	const menuStats = {
		total: totalMenuItems(),
		reviews: 839,
	};

	const specialOfferItems = [
		{
			id: breakfast.id,
			meal: breakfast.meal,
			image: breakfast.image,
			price: breakfast.price,
			category: breakfast.category,
		},
		{
			id: lunch.id,
			meal: lunch.meal,
			image: lunch.image,
			price: lunch.price,
			category: lunch.category,
		},
		{
			id: dinner.id,
			meal: dinner.meal,
			image: dinner.image,
			price: dinner.price,
			category: dinner.category,
		},
	];

	function totalMenuItems() {
		let totalItems = 0;
		categories.forEach((menuCategory) => menuCategory.menu.forEach(() => totalItems++));
		return totalItems;
	}

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
				<article id="menu-statistics" className="triple-col">
					<div className="grid-container">
						<section className="menu-statistic">
							<h2 className="stat-num">{menuStats.total}</h2>
							<h4 className="stat-subtitle">Menu Choices</h4>
						</section>
						<section className="menu-statistic">
							<h2 className="stat-num">FREE</h2>
							<h4 className="stat-subtitle">Birthday Meals</h4>
						</section>
						<section className="menu-statistic">
							<h2 className="stat-num">{menuStats.reviews}</h2>
							{/* Stars */}
							<h4 className="stat-subtitle">Reviews</h4>
						</section>
					</div>
				</article>
				<article id="special-offers" className="triple-col">
					<h3 className="offers-title">Special Offers</h3>
					<h4 className="offers-subtitle">
						<span class="gold-highlight">75%</span> Off
					</h4>
					<div className="grid-container">
						{specialOfferItems.map((item, idx) => (
							<Link to={`/menu/category/${item.category}/${item.id}`} className="offer-container" key={idx}>
								<section className="offer">
									<h3 className="offer-title">{item.meal}</h3>
									<img className="offer-img" src={item.image} alt="" />
									<div className="offer-details">
										<h4>
											<s className="strike">
												<span className="gold-highlight">£</span>
												{item.price}
											</s>
										</h4>{" "}
										<FaArrowCircleRight size={24} className="arrow" />{" "}
										<h4>
											<span className="gold-highlight">£</span>
											{Math.round(item.price) / 4}
										</h4>
									</div>
								</section>
							</Link>
						))}
					</div>
				</article>
			</div>
		</section>
	);
}

export default MenuOverview;

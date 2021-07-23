function MenuOverview({ menuCategories }) {
	return (
		<section id="menu-overview">
			<div className="container">
				<article id="menu-of-day" className="menu-article">
					<h3>Menu of The Day</h3>
					<div className="grid-container menu-of-day-content"></div>
				</article>
				<article id="menu-statistics"></article>
			</div>
		</section>
	);
}

export default MenuOverview;

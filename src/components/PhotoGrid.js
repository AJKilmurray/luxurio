import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

function PhotoGrid({ items }) {
	return (
		<section className="menu-display" id="menu-introduction">
			<ScrollAnimation animateIn="animate__rollIn" animateOnce={true}>
				<h2>What we serve</h2>
			</ScrollAnimation>
			<div className="container photo-grid">
				{items.map((item, idx) =>
					idx % 2 === 0 ? (
						<ScrollAnimation key={idx} animateIn="animate__bounceInLeft" animateOnce={true}>
							<article className="photo-grid-content content-odd">
								<figure className="grid-img-container align-start">
									<img className="photo-grid-img" src={item.img} alt="Menu" />
								</figure>
								<div key={item.title} className="photo-grid-text">
									<h3>{item.title}</h3>
									<h4>
										Starting from <span className="gold-highlight">${item.pricing}</span>
									</h4>
									<p>{item.text}</p>
									<Link to={`/menu/category/${item.category}`} className="btn">
										View Menu
									</Link>
								</div>
							</article>
						</ScrollAnimation>
					) : (
						<ScrollAnimation key={idx} animateIn="animate__bounceInRight" animateOnce={true}>
							<article className="photo-grid-content content-even">
								<div key={item.title} className="photo-grid-text">
									<h3>{item.title}</h3>
									<h4>
										Starting from <span className="gold-highlight">${item.pricing}</span>
									</h4>
									<p>{item.text}</p>
									<Link to={`/menu/category/${item.category}`} className="btn">
										View Menu
									</Link>
								</div>
								<figure className="grid-img-container align-end">
									<img className="photo-grid-img" src={item.img} alt="Menu" />
								</figure>
							</article>
						</ScrollAnimation>
					)
				)}
			</div>
		</section>
	);
}

export default PhotoGrid;

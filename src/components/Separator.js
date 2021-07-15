import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

function Separator({ textSide, title, text, btnLink, btnText, imgSrc }) {
	return textSide === "left" ? (
		<section className="separator">
			<ScrollAnimation animateIn="animate__bounceIn" animateOnce={true}>
				<div className="container grid-container">
					<article className="separator-text">
						<h2>{title}</h2>
						<p>{text}</p>
						<div className="separator-link">
							<Link to={btnLink} className="btn">
								{btnText}
							</Link>
						</div>
					</article>
					<figure className="separator-figure flex-container">
						<img className="separator-img" src={imgSrc} alt="" />
					</figure>
				</div>
			</ScrollAnimation>
		</section>
	) : (
		<section className="separator">
			<div className="container grid-container">
				<figure className="separator-figure flex-container">
					<img className="separator-img" src={imgSrc} alt="" />
				</figure>
				<article className="separator-text">
					<h2>{title}</h2>
					<p>{text}</p>
					<div className="separator-link">
						<Link to={btnLink} className="btn">
							{btnText}
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Separator;
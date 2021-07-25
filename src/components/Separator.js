import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

function Separator({ textSide, title, text, btnLink, btnText, imgSrc }) {
	return textSide === "left" ? (
		<section className="separator">
			<div className="container grid-container">
				<ScrollAnimation animateIn="animate__bounceIn" animateOnce={true} className="separator-content-1">
					<article className="separator-text">
						<h2>{title}</h2>
						<p>{text}</p>
						<div className="separator-link">
							<Link to={btnLink} className="btn">
								{btnText}
							</Link>
						</div>
					</article>
				</ScrollAnimation>
				<ScrollAnimation animateIn="animate__bounceIn" animateOnce={true} className="separator-content-2">
					<figure className="separator-figure flex-container">
						<img className="separator-img" src={imgSrc} alt="" />
					</figure>
				</ScrollAnimation>
			</div>
		</section>
	) : (
		<section className="separator">
			<div className="container grid-container">
				<ScrollAnimation animateIn="animate__bounceIn" animateOnce={true}>
					<figure className="separator-figure flex-container">
						<img className="separator-img" src={imgSrc} alt="" />
					</figure>
				</ScrollAnimation>
				<ScrollAnimation animateIn="animate__bounceIn" animateOnce={true}>
					<article className="separator-text">
						<h2>{title}</h2>
						<p>{text}</p>
						<div className="separator-link">
							<Link to={btnLink} className="btn">
								{btnText}
							</Link>
						</div>
					</article>
				</ScrollAnimation>
			</div>
		</section>
	);
}

export default Separator;

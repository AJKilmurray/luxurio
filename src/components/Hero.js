import { Link } from "react-router-dom";

function Hero({ title, text, buttonLink, buttonText }) {
	return (
		<div className="hero container">
			<div className="hero-content">
				<article className="hero-article">
					<h2 className="hero-title">{title}</h2>
					<p className="hero-text">{text}</p>
				</article>
				<Link to={buttonLink} className="hero-btn">
					{buttonText}
				</Link>
			</div>
		</div>
	);
}

export default Hero;

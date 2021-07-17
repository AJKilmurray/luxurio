import ScrollAnimation from "react-animate-on-scroll";
import FooterAccordian from "./FooterAccordian";

function Footer({ accordians }) {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer>
			<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
				<div className="container footer-container grid-container">
					{accordians.map((accordian, idx) => (
						<FooterAccordian key={idx} title={accordian.title} list={accordian.list} id={idx} />
					))}
				</div>
				<div className="container">
					<p className="copyright">
						Luxurio Copyright <span className="copyright-highlight">&copy;</span> 2021 - {year}
					</p>
				</div>
			</ScrollAnimation>
		</footer>
	);
}
export default Footer;

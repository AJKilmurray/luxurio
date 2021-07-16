import ScrollAnimation from "react-animate-on-scroll";
import FooterAccordian from "./FooterAccordian";

function Footer({ accordians }) {
	return (
		<footer>
			<ScrollAnimation animateIn="animate__bounceInUp" animateOnce={true}>
				<div className="container footer-container grid-container">
					{accordians.map((accordian, idx) => (
						<FooterAccordian key={idx} title={accordian.title} list={accordian.list} id={idx} />
					))}
				</div>
			</ScrollAnimation>
		</footer>
	);
}
export default Footer;

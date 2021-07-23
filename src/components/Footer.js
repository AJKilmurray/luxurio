import FooterMap from "../components/Map";
import ScrollAnimation from "react-animate-on-scroll";
import FooterAccordian from "./FooterAccordian";
import { GoLocation } from "react-icons/go";
import { HiPhone } from "react-icons/hi";
import { RiTruckLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";

// Footer Component
function Footer({ accordians }) {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer>
			<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
				<div className="container grid-container footer-about-container">
					<div>
						<FooterMap />
					</div>
					<article className="footer-details">
						<h3>Details</h3>
						<ul>
							<li>
								<GoLocation className="about-icon" /> 92 Manchester Rd, London E14 3BE
							</li>
							<li>
								<HiPhone className="about-icon" /> 275 2964 9275
							</li>
							<li>
								<RiTruckLine className="about-icon" /> Deliveries & Takeaways
							</li>
							<li>
								<GrMail className="about-icon" /> contact@luxurio.co.uk
							</li>
						</ul>
					</article>
					<article className="about-article">
						<h3>About Us</h3>
						<p>
							Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus
							varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien,
							sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.
						</p>
					</article>
					<article className="future-article">
						<h3>Our Future</h3>
						<p>
							Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus
							varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien,
							sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.
						</p>
					</article>
				</div>
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

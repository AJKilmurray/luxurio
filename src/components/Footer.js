import { FaChevronDown } from "react-icons/fa";

function Footer({ accordians }) {
	return (
		<footer>
			<div className="container grid-container accordian-container">
				<article className="accordian">
					<div className="accordian-header">
						<h4>Title</h4>
						<div className="toggle-accordian">
							<FaChevronDown />
						</div>
					</div>
					<div class="accordian-text-container">
						<div class="accordian-text">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
								vitae posuere augue. Nunc maximus eros eget elit iaculis, et
								facilisis metus porta. In hac habitasse platea dictumst.
								Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor
								sed molestie euismod, felis diam consequat sapien, sit amet
								rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi
								imperdiet tellus ex.
							</p>
						</div>
					</div>
				</article>
			</div>
		</footer>
	);
}
export default Footer;

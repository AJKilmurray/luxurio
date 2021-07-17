import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FooterAccordian({ title, list, id }) {
	const [accordianState, setAccordianState] = useState(false);

	function toggleAccordianHeight(id) {
		const accordians = document.querySelectorAll(".accordian");

		for (let accordian of accordians) {
			const accordianId = Number(accordian.dataset.id);
			const textContainer = accordian.querySelector(".accordian-text-container");
			const accordianUl = accordian.querySelector(".footer-links");
			const accordianToggleIcon = accordian.querySelector(".toggle-accordian-icon");

			if (accordianId === id && textContainer.offsetHeight > 0) {
				textContainer.style.height = "0px";
				accordianToggleIcon.classList.remove("rotate-icon");
			} else if (accordianId === id && textContainer.offsetHeight === 0) {
				textContainer.style.height = `${accordianUl.offsetHeight}px`;
				accordianToggleIcon.classList.add("rotate-icon");
			}
		}
	}

	return (
		<article className="accordian" data-id={id}>
			<div
				className="accordian-header"
				onClick={() => {
					setAccordianState(!accordianState);
					toggleAccordianHeight(id);
				}}
			>
				<h4>{title}</h4>
				<div className="toggle-accordian">
					<FaChevronDown className="toggle-accordian-icon" />
				</div>
			</div>
			<div className="accordian-text-container">
				<ul className="footer-links">
					{list.map((link, idx) => (
						<li className="footer-link" key={idx}>
							{link}
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}

export default FooterAccordian;

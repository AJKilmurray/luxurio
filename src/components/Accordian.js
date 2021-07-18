import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Accordian({ title, text, id }) {
	const [openState, setOpenState] = useState(false);

	function toggleAccordian(status, id) {
		const accordian = document.querySelectorAll(".accordian-component").filter((acc) => acc.dataset.key === id);
		console.log(accordian, status);
	}

	return (
		<article className="accordian-component" data-key={id}>
			<div
				className="accordian-component-header"
				onClick={() => {
					setOpenState(!openState);
					toggleAccordian(openState, id);
				}}
			>
				<h3>{title}</h3>
				<FaChevronDown />
			</div>
			<div className="accordian-component-details-container">
				<p>{text}</p>
			</div>
		</article>
	);
}

export default Accordian;

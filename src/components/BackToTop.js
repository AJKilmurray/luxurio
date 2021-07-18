import { FaChevronUp } from "react-icons/fa";

function BackToTop({ top }) {
	setInterval(() => {
		if (window.scrollY > 400 && !document.querySelector(".back-top").classList.contains("show-back-top")) {
			document.querySelector(".back-top").classList.add("show-back-top");
		} else if (window.scrollY <= 400 && document.querySelector(".back-top").classList.contains("show-back-top")) {
			document.querySelector(".back-top").classList.remove("show-back-top");
		}
	}, 1000);

	function hideBtn() {
		if (document.querySelector(".back-top").classList.contains("show-back-top")) document.querySelector(".back-top").classList.remove("show-back-top");
		else return;
	}

	return (
		<a href={top} className="back-top" onClick={hideBtn}>
			<FaChevronUp className="back-top-icon" />
		</a>
	);
}

export default BackToTop;

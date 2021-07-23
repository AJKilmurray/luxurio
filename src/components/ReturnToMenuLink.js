import { Link } from "react-router-dom";

function ReturnToMenuLink({ link }) {
	return (
		<Link to={link} className="menu-return btn">
			Go Back
		</Link>
	);
}

export default ReturnToMenuLink;

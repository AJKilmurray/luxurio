import { Link } from "react-router-dom";

function NavLinks({ links }) {
	return (
		<>
			{links.map((link) => (
				<li key={link} className="nav-list-item">
					<Link to={link} className="nav-link">
						{link === "/" ? "home" : link}
					</Link>
				</li>
			))}
		</>
	);
}

export default NavLinks;

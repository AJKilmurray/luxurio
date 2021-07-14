import { useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import logo from "../logo.png";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaStream } from "react-icons/fa";
import { GrClose } from 'react-icons/gr';

function Navbar({ navLinks }) {
	const [navState, setNavState] = useState(false);

	function toggleNavLinks() {
		setNavState(!navState);
		navState ? closeNavLinks() : openNavLinks();
	}

	function openNavLinks() {
		const navUl = document.querySelector('.nav-links-ul');
		const container = document.querySelector('.nav-links');
		container.style.height = `${navUl.offsetHeight}px`;
	}

	function closeNavLinks() {
		const container = document.querySelector('.nav-links');
		container.style.height = `0px`;
	}

	return (
		<header className="navbar">
			<div className="container nav-content">
				<div className="branding">
					<div className="brand">
						<img src={logo} alt="Logo" className="logo" />
						<Link to="/" className="branding-title">
							Luxurio
						</Link>
					</div>
					{navState ? <GrClose className="nav-toggle" size={24} onClick={toggleNavLinks} /> : <FaStream className="nav-toggle" size={24} onClick={toggleNavLinks} />}
				</div>
				<div className="socials">
					<a
						href="https://twitter.com/home"
						target="social"
						className="social-link"
					>
						<FaTwitter className="socials-icon" size={30} />
					</a>
					<a
						href="https://www.facebook.com/"
						target="social"
						className="social-link"
					>
						<FaFacebook className="socials-icon" size={30} />
					</a>
					<a
						href="https://www.linkedin.com/"
						target="social"
						className="social-link"
					>
						<FaLinkedin className="socials-icon" size={30} />
					</a>
					<a
						href="https://www.instagram.com/"
						target="social"
						className="social-link"
					>
						<FaInstagram className="socials-icon" size={30} />
					</a>
				</div>
				<nav className="nav-links flex-center">
					<ul className="nav-links-ul">
						<NavLinks links={navLinks} />
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;

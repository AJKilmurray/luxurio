import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Separator from "../components/Separator";
import stockMenu from "../images/stock-menu.png";
import PhotoGrid from "../components/PhotoGrid";
import Footer from "../components/Footer";
import Breakfast from "../images/breakfast.jpg";
import Lunch from "../images/lunch.jpg";
import Dinner from "../images/dinner.jpg";
import Dessert from "../images/dessert.jpg";

function Home() {
	// Hero Title & Text
	const heroText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.";
	const heroTitle = "Exceptional Tastes";

	// Separator Title & Text
	const sepText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.";
	const sepTitle = "Extravagant Menus";

	// Photo Grid Items
	const photoGridItems = [
		{
			title: "Breakfast",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.",
			img: Breakfast,
			pricing: 4.99,
		},
		{
			title: "Lunch",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.",
			img: Lunch,
			pricing: 8.99,
		},
		{
			title: "Dinner",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.",
			img: Dinner,
			pricing: 12.99,
		},
		{
			title: "Dessert",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.",
			img: Dessert,
			pricing: 5.49,
		},
	];

	// Footer Accordians
	const footerAccordians = [
		{
			title: "Pages",
			list: [<Link to="/">Home</Link>, <Link to="/menu">Menu</Link>, <Link to="/bookings">Bookings</Link>, <Link to="/about">About</Link>],
		},
		{
			title: "Contact",
			list: [<Link to="/">Email</Link>, <Link to="/">Phone</Link>, <Link to="/">Post Office</Link>, <Link to="/">Instagram</Link>, <Link to="/">Twitter</Link>],
		},
		{
			title: "Menu",
			list: [<Link to="/">Breakfast</Link>, <Link to="/">Lunch</Link>, <Link to="/">Dinner</Link>, <Link to="/">Desserts</Link>, <Link to="/">Drinks</Link>],
		},
		{
			title: "About",
			list: [<Link to="/">Opening Times</Link>, <Link to="/">Staff</Link>, <Link to="/">Marketing</Link>, <Link to="/">Terms</Link>, <Link to="/">Conditions</Link>],
		},
	];

	return (
		<main>
			<section id="welcome" className="landing-section">
				<Navbar navLinks={["menu", "bookings", "about"]} />
				<Hero title={heroTitle} text={heroText} buttonLink="bookings" buttonText="Book Now" />
			</section>
			<Separator textSide="left" title={sepTitle} text={sepText} btnLink="menu" btnText="View Menu" imgSrc={stockMenu} />
			<PhotoGrid items={photoGridItems} />
			<Footer accordians={footerAccordians} />
		</main>
	);
}

export default Home;

import { Link } from "react-router-dom";
import Breakfast from "../images/breakfast.jpg";
import Lunch from "../images/lunch.jpg";
import Dinner from "../images/dinner.jpg";
import Dessert from "../images/dessert.jpg";

// Hero Title & Text [Home]
export const homeHeroText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.";
export const homeHeroTitle = "Exceptional Tastes";

// Schedule
export const scheduleHeader = ["Days", "Opening", "Closing"];
export const scheduleDays = {
  mon: {
    day: "Monday",
    open: "9:00AM",
    close: "7:30PM",
  },
  tue: {
    day: "Tuesday",
    open: "9:00AM",
    close: "8:00PM",
  },
  wed: {
    day: "Wednesday",
    open: "8:30AM",
    close: "8:00PM",
  },
  thur: {
    day: "Thursday",
    open: "9:00AM",
    close: "7:30PM",
  },
  fri: {
    day: "Friday",
    open: "9:00AM",
    close: "7:30PM",
  },
  sat: {
    day: "Monday",
    open: "8:00AM",
    close: "4:30PM",
  },
  sun: {
    day: "Sunday",
    open: "7:30AM",
    close: "5:00PM",
  },
};

// Separator Title & Text [Home]
export const homeSepText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.";
export const homeSepTitle = "Extravagant Menus";

// Photo Grid Items
export const photoGridItems = [
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
export const footerAccordians = [
  {
    title: "Pages",
    list: [
      <Link to="/">Home</Link>,
      <Link to="/menu">Menu</Link>,
      <Link to="/bookings">Bookings</Link>,
      <Link to="/about">About</Link>,
    ],
  },
  {
    title: "Contact",
    list: [
      <Link to="/">Email</Link>,
      <Link to="/">Phone</Link>,
      <Link to="/">Post Office</Link>,
      <Link to="/">Instagram</Link>,
      <Link to="/">Twitter</Link>,
    ],
  },
  {
    title: "Menu",
    list: [
      <Link to="/">Breakfast</Link>,
      <Link to="/">Lunch</Link>,
      <Link to="/">Dinner</Link>,
      <Link to="/">Desserts</Link>,
      <Link to="/">Drinks</Link>,
    ],
  },
  {
    title: "About",
    list: [
      <Link to="/">Opening Times</Link>,
      <Link to="/">Staff</Link>,
      <Link to="/">Marketing</Link>,
      <Link to="/">Terms</Link>,
      <Link to="/">Conditions</Link>,
    ],
  },
];

export const menuNavHeader = "Menu";
export const menuNavCategories = {
  breakfast: {
    name: "breakfast",
  },
  lunch: {
    name: "lunch",
  },
  dinner: {
    name: "dinner",
  },
  dessert: {
    name: "dessert",
  },
  drinks: {
    name: "drinks",
  },
};

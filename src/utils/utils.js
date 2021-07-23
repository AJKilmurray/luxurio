import { Link } from "react-router-dom";
import Breakfast from "../images/breakfast.jpg";
import Lunch from "../images/lunch.jpg";
import Dinner from "../images/dinner.jpg";
import Dessert from "../images/dessert.jpg";

// Breakfast Menu Items
import FullEnglishBreakfast from "../images/menu-fullEnglishBreakfast.jpg";
import FrenchToast from "../images/menu-frenchToast.jpg";
import ScrambledEggs from "../images/menu-scrambledEggs.jpg";
import Waffles from "../images/menu-waffles.jpg";
import Pancakes from "../images/menu-pancakes.jpg";
import Porridge from "../images/menu-porridge.jpg";
import HamSandwich from "../images/menu-hamSandwich.jpg";
import FruitSalad from "../images/menu-fruitSalad.jpg";

// Lunch Menu Items
import ChickenWraps from "../images/menu-chickenWraps.jpg";
import BeefBurger from "../images/menu-beefBurger.jpg";
import Ribs from "../images/menu-ribs.jpg";
import Macaroni from "../images/menu-macaroni.jpg";
import BaconRoll from "../images/menu-baconRoll.jpg";
import LentilSoup from "../images/menu-lentilSoup.jpg";
import ChickenSalad from "../images/menu-chickenSalad.jpg";
import GrilledSandwich from "../images/menu-grilledSandwich.jpg";

// Hero Title & Text [Home]
export const homeHeroText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.";
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
export const homeSepText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.";
export const homeSepTitle = "Extravagant Menus";

// Photo Grid Items
export const photoGridItems = [
  {
    title: "Breakfast",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.",
    img: Breakfast,
    pricing: 4.99,
    category: "breakfast",
  },
  {
    title: "Lunch",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.",
    img: Lunch,
    pricing: 8.99,
    category: "lunch",
  },
  {
    title: "Dinner",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.",
    img: Dinner,
    pricing: 12.99,
    category: "dinner",
  },
  {
    title: "Dessert",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.",
    img: Dessert,
    pricing: 5.49,
    category: "dessert",
  },
];

// Footer Accordians
export const footerAccordians = [
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

export const menuNavHeader = "Menu";
export const menuCategories = {
  breakfast: {
    name: "breakfast",
    menu: [
      {
        id: 1,
        meal: "Full English Breakfast",
        desc: "Our full english breakfast is freshly cooked and includes bacon, sausages, eggs, black pudding, baked beans, tomatoes, mushrooms and toast.",
        price: 12.99,
        image: FullEnglishBreakfast,
        servings: 2,
        calories: 875,
      },
      {
        id: 2,
        meal: "French Toast",
        desc: 'French toast is a dish made of sliced bread soaked in beaten eggs and typically milk, then pan fried. Alternative names and variants include "eggy bread", "Bombay toast", "gypsy toast", and "poor knights".',
        price: 9.99,
        image: FrenchToast,
        servings: 2,
        calories: 795,
      },
      {
        id: 3,
        meal: "Scrambled Eggs",
        desc: "Scrambled eggs is a dish made from eggs stirred, whipped or beaten together while being gently heated, typically with salt, butter and sometimes other ingredients.",
        price: 11.99,
        image: ScrambledEggs,
        servings: 1,
        calories: 460,
      },
      {
        id: 4,
        meal: "Waffles",
        desc: "A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression. There are many variations based on the type of waffle iron and recipe used.",
        price: 7.99,
        image: Waffles,
        servings: 2,
        calories: 650,
      },
      {
        id: 5,
        meal: "Pancakes",
        desc: "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.",
        price: 8.99,
        image: Pancakes,
        servings: 2,
        calories: 950,
      },
      {
        id: 6,
        meal: "Fruit Salad",
        desc: "Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their own juices or a syrup.",
        price: 13.99,
        image: FruitSalad,
        servings: 2,
        calories: 790,
      },
      {
        id: 7,
        meal: "Porridge",
        desc: "Porridge is a food commonly eaten as a breakfast cereal dish, made by boiling ground, crushed or chopped starchy plants—typically grain—in milk.",
        price: 3.99,
        image: Porridge,
        servings: 1,
        calories: 600,
      },
      {
        id: 8,
        meal: "Ham Sandwich",
        desc: "The ham sandwich is a common type of sandwich. The bread may be fresh or toasted, and it can be made with a variety of toppings including cheese and vegetables like lettuce, tomato, onion or pickle slices. Various kinds of mustard and mayonnaise are also common.",
        price: 7.99,
        image: HamSandwich,
        servings: 1,
        calories: 560,
      },
    ],
  },
  lunch: {
    name: "lunch",
    menu: [
      {
        id: 1,
        meal: "Chicken Wraps",
        desc: "Our freshly made chicken wraps are made with natural ingredients and include richly cooked chicken. Optional additions are tomatoes, onions, olives, butter, lettuce, and sides such as chips, crisps, and fruit.",
        price: 10.99,
        image: ChickenWraps,
        servings: 2,
        calories: 930,
      },
      {
        id: 2,
        meal: "Beef Burger",
        desc: "Our freshly prepared beef burgers are saturated in high protein and vitamins. Optional additions include extra beef, mayonnaise, extra cheese, lettuce, tomatoes, and chips.",
        price: 13.99,
        image: BeefBurger,
        servings: 1,
        calories: 880,
      },
      {
        id: 3,
        meal: "Pork Ribs",
        desc: "Our freshly cooked pork ribs are fill with delicious juices and nutrients. ",
        price: 16.99,
        image: Ribs,
        servings: 3,
        calories: 1230,
      },
      {
        id: 4,
        meal: "Macaroni Cheese",
        desc: "Macaroni is dry pasta shaped like narrow tubes. Made with durum wheat, macaroni is commonly cut in short lengths; curved macaroni may be referred to as elbow macaroni",
        price: 11.49,
        image: Macaroni,
        servings: 1,
        calories: 790,
      },
      {
        id: 5,
        meal: "Bacon Roll",
        desc: 'A bacon roll is a simple way of serving bacon in the form of a sandwich, using a soft or crusty bread roll. Popular in the U.K. with much argued regional variations in naming, such as "bacon sarnie", "bacon butty/buttie" "bacon bap", "bacon barm" or "bacon cob". Most often served with brown sauce or tomato ketchup.',
        price: 7.99,
        image: BaconRoll,
        servings: 1,
        calories: 825,
      },
      {
        id: 6,
        meal: "Lentil Soup",
        desc: "Lentil soup is a soup based on lentils; it may be vegetarian or include meat, and may use brown, red, yellow, green or black lentils, with or without the husk. Dehulled yellow and red lentils disintegrate in cooking, making a thick soup.",
        price: 8.99,
        image: LentilSoup,
        servings: 1,
        calories: 565,
      },
      {
        id: 7,
        meal: "Chicken Salad",
        desc: "Chicken salad is any salad with chicken as a main ingredient. Other common ingredients may include mayonnaise, hard-boiled egg, celery, onion, pepper, pickles and a variety of mustards.",
        price: 9.49,
        image: ChickenSalad,
        servings: 1,
        calories: 640,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
    ],
  },
  dinner: {
    name: "dinner",
    menu: [
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
    ],
  },
  dessert: {
    name: "dessert",
    menu: [
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
    ],
  },
  drinks: {
    name: "drinks",
    menu: [
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
      },
    ],
  },
};

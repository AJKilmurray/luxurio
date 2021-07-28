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

// Dinner Menu Items
import SteakChips from "../images/menu-steakChips.jpg";
import PorkChops from "../images/menu-porkchop.jpg";
import Pizza from "../images/menu-pizza.jpg";
import Bolognese from "../images/menu-bolognese.jpg";
import Risotto from "../images/menu-risotto.jpg";
import FishChips from "../images/menu-fishChips.jpg";
import BakedPotato from "../images/menu-bakedPotato.jpg";
import Carbonara from "../images/menu-carbonara.jpg";

// Dessert Menu Items
import Sundae from "../images/menu-sundae.jpg";
import Brownie from "../images/menu-brownie.jpg";
import ApplePie from "../images/menu-applePie.jpg";
import CinnamonRolls from "../images/menu-cinnamonRolls.jpg";
import ChocolateCake from "../images/menu-chocolateCake.jpg";
import CheeseCake from "../images/menu-cheeseCake.jpg";
import Eclaires from "../images/menu-eclaires.jpg";
import Triffle from "../images/menu-triffle.jpg";

// Drinks Menu Items
import Coffee from "../images/menu-coffee.jpg";
import Tea from "../images/menu-tea.jpg";
import Milkshake from "../images/menu-milkshake.jpg";
import Smoothie from "../images/menu-smoothie.jpg";

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
export const menuCategories = {
  breakfast: {
    name: "breakfast",
    times: {
      start: "8:30am",
      end: "11:30am",
    },
    menu: [
      {
        id: 1,
        meal: "Full English",
        desc: "Our full english breakfast is freshly cooked and includes bacon, sausages, eggs, black pudding, baked beans, tomatoes, mushrooms and toast.",
        price: 12.99,
        image: FullEnglishBreakfast,
        servings: 2,
        calories: 875,
        category: "breakfast",
      },
      {
        id: 2,
        meal: "French Toast",
        desc: 'French toast is a dish made of sliced bread soaked in beaten eggs and typically milk, then pan fried. Alternative names and variants include "eggy bread", "Bombay toast", "gypsy toast", and "poor knights".',
        price: 9.99,
        image: FrenchToast,
        servings: 2,
        calories: 795,
        category: "breakfast",
      },
      {
        id: 3,
        meal: "Scrambled Eggs",
        desc: "Scrambled eggs is a dish made from eggs stirred, whipped or beaten together while being gently heated, typically with salt, butter and sometimes other ingredients.",
        price: 11.99,
        image: ScrambledEggs,
        servings: 1,
        calories: 460,
        category: "breakfast",
      },
      {
        id: 4,
        meal: "Waffles",
        desc: "A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression. There are many variations based on the type of waffle iron and recipe used.",
        price: 7.99,
        image: Waffles,
        servings: 2,
        calories: 650,
        category: "breakfast",
      },
      {
        id: 5,
        meal: "Pancakes",
        desc: "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.",
        price: 8.99,
        image: Pancakes,
        servings: 2,
        calories: 950,
        category: "breakfast",
      },
      {
        id: 6,
        meal: "Fruit Salad",
        desc: "Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their own juices or a syrup.",
        price: 13.99,
        image: FruitSalad,
        servings: 2,
        calories: 790,
        category: "breakfast",
      },
      {
        id: 7,
        meal: "Porridge",
        desc: "Porridge is a food commonly eaten as a breakfast cereal dish, made by boiling ground, crushed or chopped starchy plants—typically grain—in milk.",
        price: 3.99,
        image: Porridge,
        servings: 1,
        calories: 600,
        category: "breakfast",
      },
      {
        id: 8,
        meal: "Ham Sandwich",
        desc: "The ham sandwich is a common type of sandwich. The bread may be fresh or toasted, and it can be made with a variety of toppings including cheese and vegetables like lettuce, tomato, onion or pickle slices. Various kinds of mustard and mayonnaise are also common.",
        price: 7.99,
        image: HamSandwich,
        servings: 1,
        calories: 560,
        category: "breakfast",
      },
    ],
  },
  lunch: {
    name: "lunch",
    times: {
      start: "11:30am",
      end: "4:00pm",
    },
    menu: [
      {
        id: 1,
        meal: "Chicken Wraps",
        desc: "Our freshly made chicken wraps are made with natural ingredients and include richly cooked chicken. Optional additions are tomatoes, onions, olives, butter, lettuce, and sides such as chips, crisps, and fruit.",
        price: 10.99,
        image: ChickenWraps,
        servings: 2,
        calories: 930,
        category: "lunch",
      },
      {
        id: 2,
        meal: "Beef Burger",
        desc: "Our freshly prepared beef burgers are saturated in high protein and vitamins. Optional additions include extra beef, mayonnaise, extra cheese, lettuce, tomatoes, and chips.",
        price: 13.99,
        image: BeefBurger,
        servings: 1,
        calories: 880,
        category: "lunch",
      },
      {
        id: 3,
        meal: "Pork Ribs",
        desc: "Our freshly cooked pork ribs are fill with delicious juices and nutrients. ",
        price: 16.99,
        image: Ribs,
        servings: 3,
        calories: 1230,
        category: "lunch",
      },
      {
        id: 4,
        meal: "Macaroni Cheese",
        desc: "Macaroni is dry pasta shaped like narrow tubes. Made with durum wheat, macaroni is commonly cut in short lengths; curved macaroni may be referred to as elbow macaroni",
        price: 11.49,
        image: Macaroni,
        servings: 1,
        calories: 790,
        category: "lunch",
      },
      {
        id: 5,
        meal: "Bacon Roll",
        desc: 'A bacon roll is a simple way of serving bacon in the form of a sandwich, using a soft or crusty bread roll. Popular in the U.K. with much argued regional variations in naming, such as "bacon sarnie", "bacon butty/buttie" "bacon bap", "bacon barm" or "bacon cob". Most often served with brown sauce or tomato ketchup.',
        price: 7.99,
        image: BaconRoll,
        servings: 1,
        calories: 825,
        category: "lunch",
      },
      {
        id: 6,
        meal: "Lentil Soup",
        desc: "Lentil soup is a soup based on lentils; it may be vegetarian or include meat, and may use brown, red, yellow, green or black lentils, with or without the husk. Dehulled yellow and red lentils disintegrate in cooking, making a thick soup.",
        price: 8.99,
        image: LentilSoup,
        servings: 1,
        calories: 565,
        category: "lunch",
      },
      {
        id: 7,
        meal: "Chicken Salad",
        desc: "Chicken salad is any salad with chicken as a main ingredient. Other common ingredients may include mayonnaise, hard-boiled egg, celery, onion, pepper, pickles and a variety of mustards.",
        price: 9.49,
        image: ChickenSalad,
        servings: 1,
        calories: 640,
        category: "lunch",
      },
      {
        id: 8,
        meal: "Grilled Sandwich",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.49,
        image: GrilledSandwich,
        servings: 1,
        calories: 725,
        category: "lunch",
      },
    ],
  },
  dinner: {
    name: "dinner",
    times: {
      start: "4:00pm",
      end: "8:00pm",
    },
    menu: [
      {
        id: 1,
        meal: "Steak n Chips",
        desc: "A steak is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though can also be pan-fried. It is often grilled in an attempt to replicate the flavor of steak cooked over the glowing coals of an open fire.",
        price: 19.99,
        image: SteakChips,
        servings: 1,
        calories: 815,
        category: "dinner",
      },
      {
        id: 2,
        meal: "Porkchops",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 18.99,
        image: PorkChops,
        servings: 2,
        calories: 860,
        category: "dinner",
      },
      {
        id: 3,
        meal: "Fresh Pizza",
        desc: "Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.",
        price: 13.49,
        image: Pizza,
        servings: 2,
        calories: 985,
        category: "dinner",
      },
      {
        id: 4,
        meal: "Bolognese",
        desc: "Freshly served spaghetti with a sauce of minced beef, tomato, onion, and herbs, picked from our home-grown range of plants and herbs.",
        price: 14.49,
        image: Bolognese,
        servings: 1,
        calories: 710,
        category: "dinner",
      },
      {
        id: 5,
        meal: "Chicken Risotto",
        desc: "Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth is derived from fresh chicken breast. Many types of risotto contain butter, onion, white wine, and parmesan cheese.",
        price: 16.99,
        image: Risotto,
        servings: 2,
        calories: 805,
        category: "dinner",
      },
      {
        id: 6,
        meal: "Fish n Chips",
        desc: "Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England, where these two components had been introduced from separate immigrant cultures; it is not known who created the culinary fusion that became the emblematic British meal.",
        price: 11.49,
        image: FishChips,
        servings: 2,
        calories: 970,
        category: "dinner",
      },
      {
        id: 7,
        meal: "Baked Potato",
        desc: "A baked potato, known in some parts of the United Kingdom as a jacket potato, is a preparation of potato. The ideal baked potato has a fluffy interior and a crispy skin. It may be served with fillings, toppings or condiments such as butter, cheese, sour cream, gravy, baked beans, and even ground meat or corned beef.",
        price: 8.99,
        image: BakedPotato,
        servings: 1,
        calories: 800,
        category: "dinner",
      },
      {
        id: 8,
        meal: "Carbonara",
        desc: "Carbonara is an Italian pasta dish from Rome made with egg, hard cheese, cured pork, and black pepper. The dish arrived at its modern form, with its current name, in the middle of the 20th century. The cheese is usually Pecorino Romano, Parmigiano-Reggiano, or a combination of the two.",
        price: 14.99,
        image: Carbonara,
        servings: 1,
        calories: 765,
        category: "dinner",
      },
    ],
  },
  dessert: {
    name: "dessert",
    times: {
      start: "3:00pm",
      end: "8:00pm",
    },
    menu: [
      {
        id: 1,
        meal: "Ice Cream Sundae",
        desc: "A sundae is an ice cream dessert that typically consists of one or more scoops of ice cream topped with sauce or syrup and in some cases other toppings such as: sprinkles, whipped cream, marshmallows, peanuts, maraschino cherries, or other fruits.",
        price: 8.49,
        image: Sundae,
        servings: 1,
        calories: 930,
        category: "dessert",
      },
      {
        id: 2,
        meal: "Brownies",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 9.99,
        image: Brownie,
        servings: 1,
        calories: 895,
        category: "dessert",
      },
      {
        id: 3,
        meal: "Apple Pie",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 10.99,
        image: ApplePie,
        servings: 1,
        calories: 835,
        category: "dessert",
      },
      {
        id: 4,
        meal: "Cinnamon Rolls",
        desc: "A cinnamon roll is a sweet roll commonly served in Northern Europe and North America. In Sweden it is called kanelbulle, in Denmark it is known as kanelsnegl, in Norway it is known as kanelbolle, skillingsboller or kanelsnurr, and in Finland it is known as korvapuusti.",
        price: 10.49,
        image: CinnamonRolls,
        servings: 1,
        calories: 780,
        category: "dessert",
      },
      {
        id: 5,
        meal: "Chocolate Cake",
        desc: "Chocolate cake or chocolate gâteau is a cake flavored with melted chocolate, cocoa powder, or both.",
        price: 9.49,
        image: ChocolateCake,
        servings: 1,
        calories: 840,
        category: "dessert",
      },
      {
        id: 6,
        meal: "Cheese Cake",
        desc: "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies, graham crackers, pastry, or sometimes sponge cake.",
        price: 11.99,
        image: CheeseCake,
        servings: 1,
        calories: 820,
        category: "dessert",
      },
      {
        id: 7,
        meal: "Eclairs",
        desc: "An éclair is an oblong pastry made with choux dough filled with a cream and topped with chocolate icing. The dough, which is the same as that used for profiterole, is typically piped into an oblong shape with a pastry bag and baked until it is crisp and hollow inside.",
        price: 12.49,
        image: Eclaires,
        servings: 1,
        calories: 785,
        category: "dessert",
      },
      {
        id: 8,
        meal: "Triffle",
        desc: "Trifle is a dessert found in British and other cuisines. Made with fruit, a thin layer of sponge fingers commonly soaked in sherry or another fortified wine, and custard, the contents of a trifle are highly variable; many varieties exist, some forgoing fruit entirely and instead using other ingredients, such as chocolate, coffee or vanilla.",
        price: 11.49,
        image: Triffle,
        servings: 1,
        calories: 810,
        category: "desserts",
      },
    ],
  },
  drinks: {
    name: "drinks",
    menu: [
      {
        id: 1,
        meal: "Coffee",
        desc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. All fruit must be further processed from a raw material—the fruit and seed—into a stable, raw product; un-roasted, green coffee.",
        price: 1.99,
        image: Coffee,
        servings: 1,
        calories: 0,
      },
      {
        id: 2,
        meal: "Tea",
        desc: "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia. After water, it is the most widely consumed drink in the world.",
        price: 1.99,
        image: Tea,
        servings: 1,
        calories: 1,
      },
      {
        id: 3,
        meal: "Milkshake",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 2.49,
        image: Milkshake,
        servings: 1,
        calories: 315,
      },
      {
        id: 4,
        meal: "Smoothie",
        desc: "Our grilled ham sandwiches are rich in flavour and spices. With optional sides such as chips, crisps, vegetables, fruit, and potato wedges.",
        price: 2.49,
        image: Smoothie,
        servings: 1,
        calories: 410,
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

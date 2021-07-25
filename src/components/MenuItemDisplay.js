import { useParams } from "react-router-dom";
import ReturnToMenuLink from "./ReturnToMenuLink";

// Displays the selected menu item within a specific category (For example: "breakfast" is a menu category, as is "lunch" and "dinner")
function MenuItemDisplay({ menuCategories }) {
	// Selects the category and category item from the URL
	const { category, item } = useParams();
	const categories = Object.values(menuCategories);

	// category - Category of menu being browsed (Breakfast, Lunch, Dinner, Dessert, Drinks)
	// item - Item within the category being browsed (from id's 1 - 8)

	// Example of Object Structure
	// breakfast: {
	//   name: "breakfast",
	//   menu: [
	//     {
	//       id: 1,
	//       meal: "Full English Breakfast",
	//       desc: "Our full english breakfast is freshly cooked and includes bacon, sausages, eggs, black pudding, baked beans, tomatoes, mushrooms and toast.",
	//       price: 12.99,
	//       image: FullEnglishBreakfast,
	//       servings: 2,
	//       calories: 875,
	//     }
	// 	 ]
	// }

	return (
		<article className="display-individual-item container">
			{/* For each category */}
			{categories.map((menuCategory) => {
				// If the category name is equal to the catagory paramater within the URL
				if (menuCategory.name === category) {
					// Iterate over the menu of the category
					return menuCategory.menu.map((menuItem, idx) => {
						// If the menu item's id is equal to the /menu/category/:category/:item URL paramater
						if (menuItem.id === Number(item)) {
							return (
								<div key={idx}>
									{/* Returns to the menu category originally selected */}
									<ReturnToMenuLink link={`/menu/category/${category}`} />
									<div className="individual-item-container grid-container">
										<figure className="menu-item-figure">
											<img src={menuItem.image} className="menu-item-img" />
										</figure>
										<article className="menu-item-info">
											<h3 className="menu-item-meal">{menuItem.meal}</h3>
											<p className="menu-item-desc">{menuItem.desc}</p>
											<div class="menu-item-stats">
												<h5 className="menu-item-stat">
													Calories: <span className="light-brown-highlight">{menuItem.calories}</span>
												</h5>
												<h5 className="menu-item-stat">
													Servings: <span className="light-brown-highlight">{menuItem.servings}</span>
												</h5>
											</div>
										</article>
									</div>
								</div>
							);
						}
					});
				}
			})}
		</article>
	);
}

export default MenuItemDisplay;

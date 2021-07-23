import { useParams } from "react-router-dom";

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
    <article className="display-individual-item">
      {categories.map((menuCategory) => {
        // If the category name is equal to the catagory paramater within the URL
        if (menuCategory.name === category) {
          // Iterate over the menu of the category
          return menuCategory.menu.map((menuItem, idx) => {
            // If the menu item's id is equal to the /menu/category/:category/:item URL paramater
            if (menuItem.id === Number(item)) {
              return (
                <div className="individual-item-container container" key={idx}>
                  <h3>{menuItem.meal}</h3>
                  <h4>{menuItem.price}</h4>
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

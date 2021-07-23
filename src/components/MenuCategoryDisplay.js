import { Link, useParams } from "react-router-dom";

// Display selected category from the menu navbar (MenuNav Component)
function DisplayCategory({ menuCategories }) {
  // Selects the category from the URL
  let { category } = useParams();
  const categories = Object.values(menuCategories);

  return (
    <section className="menu-category-display">
      <div className="container">
        {/* Back to main menu page */}
        <Link to="/menu" className="menu-return btn">
          Go Back
        </Link>
        {/* Display Category name based on URL (/menu/category/lunch --> Lunch Menu) */}
        <h3 className="menu-category-title">{category} Menu</h3>
        <div className="grid-container category-results">
          {categories.map((menuCategory) => {
            // If the name of the category is equal to the category defined in the url
            if (menuCategory.name === category) {
              // Map through the menu items of the category
              return menuCategory.menu.map((item, idx) => (
                // Link to view individual menu item via /menu/category:category/:id
                <Link to={`/menu/category/${menuCategory.name}/${item.id}`} className="menu-card-link" key={idx}>
                  <div className="menu-card">
                    <img src={item.image} alt="" />
                    <h3>{item.meal}</h3>
                    <h4>£{item.price}</h4>
                  </div>
                </Link>
              ));
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default DisplayCategory;

import { Link } from "react-router-dom";

function MenuNav({ heading, navCategories }) {
  const categories = Object.values(navCategories);
  return (
    <nav className="menu-nav">
      <div className="container menu-nav-container">
        <div className="menu-nav-header">
          <h3>{heading}</h3>
        </div>
        <ul className="menu-nav-links">
          {categories.map((category, idx) => (
            <Link to={`/menu/category/${category.name}`} className="menu-nav-link" key={idx}>
              {category.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MenuNav;

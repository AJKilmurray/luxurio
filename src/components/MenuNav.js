import { Link, BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

function MenuNav({ heading, navCategories }) {
  const categories = Object.values(navCategories);
  return (
    <Router>
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
      <Switch>
        <Route path="/menu/category/:id" children={<DisplayID menuCategories={navCategories} />} />
      </Switch>
    </Router>
  );
}

function DisplayID({ menuCategories }) {
  let { id } = useParams();
  const categories = Object.values(menuCategories);

  return (
    <Router>
      <section className="menu-category-display">
        <div className="container">
          <Link to="/menu" className="menu-return btn">
            Go Back
          </Link>
          <h3 className="menu-category-title">{id} Menu</h3>
          <div className="grid-container category-results">
            {categories.map((category) => {
              if (category.name === id) {
                return category.menu.map((item, idx) => (
                  <Link path={`/menu/category/${category.name}/${item.id}`} className="menu-card-link">
                    <div className="menu-card" key={idx}>
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
    </Router>
  );
}

export default MenuNav;

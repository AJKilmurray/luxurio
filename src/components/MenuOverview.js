import { Link } from "react-router-dom";

function MenuOverview({ menuCategories }) {
  const categories = Object.values(menuCategories);
  const date = new Date();
  const breakfast = categories[0];
  const lunch = categories[1];
  const dinner = categories[2];

  return (
    <section id="menu-overview">
      <div className="container">
        <article id="menu-of-day" className="menu-article">
          <h3 className="menu-article-title">Menu of The Day</h3>
          <h4 className="menu-article-sale">
            <span className="MOD-stat-highlight">50%+</span> Off!
          </h4>
          <div className="grid-container menu-of-day-content">
            {categories.map((category) => {
              if (category.name !== "drinks") {
                const item = category.menu[date.getDay()];
                return (
                  <Link to={`/menu/category/${category.name}/${item.id}`} className="MOD-redirect">
                    <article className="MOD-item" key={item.meal}>
                      <h3>{category.name}</h3>
                      <p className="MOD-item-times">
                        {category.times.start} - {category.times.end}
                      </p>
                      <img src={item.image} />
                      <div className="MOD-item-info">
                        <h4 className="MOD-item-title">{item.meal}</h4>
                        <h4 className="MOD-item-price">£{Math.round(Number(item.price)) / 2}</h4>
                      </div>
                      <div className="MOD-item-stats">
                        <h5 className="MOD-stat">
                          Calories: <span className="MOD-stat-highlight">{item.calories}</span>
                        </h5>
                        <h5 className="MOD-stat">
                          Servings: <span className="MOD-stat-highlight">{item.servings}</span>
                        </h5>
                      </div>
                    </article>
                  </Link>
                );
              }
            })}
          </div>
        </article>
        <article id="menu-statistics">
          <div className="grid-container">
            <section className="menu-statistic">
              <h2>num</h2>
              <h4>Number of Menu Items</h4>
            </section>
            <section className="menu-statistic">
              <h2>num</h2>
              {/* Stars */}
              <h4>Reviews</h4>
            </section>
            <section className="menu-statistic">
              <h2>FREE</h2>
              <h4>Birthday Meals</h4>
            </section>
          </div>
        </article>
        <article className="special-offers">
          <div className="grid-container">
            <section className="offer">
              <h3>{breakfast.menu[date.getDay() + 1].meal}</h3>
            </section>
            <section className="offer">
              <h3>{lunch.menu[date.getDay() + 1].meal}</h3>
            </section>
            <section className="offer">
              <h3>{dinner.menu[date.getDay() + 1].meal}</h3>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}

export default MenuOverview;

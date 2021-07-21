import { useParams } from "react-router-dom";

function MenuItemDisplay() {
  const { category, item } = useParams();

  // category - Category of menu being browsed (Breakfast, Lunch, Dinner, Dessert, Drinks)
  // item - Item within the category being browsed (from id's 1 - 8)

  return (
    <article className="display-individual-item">
      <div className="individual-item-container"></div>
    </article>
  );
}

export default MenuItemDisplay;

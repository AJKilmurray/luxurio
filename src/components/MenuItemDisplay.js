import { useParams } from "react-router-dom";

function MenuItemDisplay() {
	const { category, item } = useParams();

	return (
		<div>
			<h3>
				{category} : {item}
			</h3>
		</div>
	);
}

export default MenuItemDisplay;

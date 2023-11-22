import { useParams } from "react-router-dom";
import { Card } from "../../Components/Card/Card";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";

const getCategoryName = (category) => {
  switch (category) {
    case "mens-clothing":
      return "men's clothing";

    case "womens-clothing":
      return "women's clothing";

    default:
      return category;
  }
};

function renderView() {
  const { category } = useParams();

  const { products } = useContext(ShoppingCartContext);

  const { filteredItemsByTitle, filteredByCategory } =
    useContext(ShoppingCartContext);

  const { searchByTitle } = useContext(ShoppingCartContext);

  let categoryName;
  let itemsToRender = products;

  if (searchByTitle.length > 0 || category) {
    if (category) {
      categoryName = getCategoryName(category);
      itemsToRender = filteredByCategory(itemsToRender, categoryName);
    }
    itemsToRender = filteredItemsByTitle(itemsToRender);
  } else {
    itemsToRender = products;
  }

  if (itemsToRender?.length > 0) {
    return itemsToRender?.map((product) => (
      <Card
        key={product.id}
        id={product.id}
        category={product.category}
        image={product?.image}
        price={product.price}
        title={product.title}
      />
    ));
  } else {
    return (
      <div className="bg-red-500 text-white text-lg p-3 rounded-lg flex flex-row gap-2 items-center w-80 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>

        <p>No results found</p>
      </div>
    );
  }
}

export { renderView };

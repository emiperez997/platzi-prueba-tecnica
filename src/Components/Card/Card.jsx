import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";

function Card({ id, category, title, price, image }) {
  const { count, setCount } = useContext(ShoppingCartContext);

  const { openProductDetail, closeProductDetail } =
    useContext(ShoppingCartContext);

  const { setProductToShow } = useContext(ShoppingCartContext);

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  const { openCheckoutSideMenu } = useContext(ShoppingCartContext);

  const handleAdd = (e) => {
    e.stopPropagation();

    setCount(count + 1);

    // Add product to shopping cart
    setShoppingCart([...shoppingCart, { id, category, title, price, image }]);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const showProduct = () => {
    openProductDetail();
    setProductToShow({ category, title, price, image });
  };

  const renderAddButton = (id) => {
    const isProductInCart = shoppingCart.some((product) => product.id === id);

    if (isProductInCart) {
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          onClick={handleAdd}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      );
    }
  };

  return (
    <article
      className="bg-white cursor-pointer w-56 h-60"
      onClick={() => showProduct()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category.toUpperCase()}
        </span>
        <img className="w-full h-full object-cover" src={image} alt={title} />
        {renderAddButton(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-bold">${price}</span>
      </p>
    </article>
  );
}

export { Card };

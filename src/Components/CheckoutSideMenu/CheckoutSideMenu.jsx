import "./CheckoutSideMenu.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../OrderCard/OrderCard";
import { Link } from "react-router-dom";

function CheckoutSideMenu() {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } =
    useContext(ShoppingCartContext);

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  const { order, setOrder } = useContext(ShoppingCartContext);

  const { setCount } = useContext(ShoppingCartContext);

  const { setSearchByTitle } = useContext(ShoppingCartContext);

  const handeDelete = (id) => {
    const newShoppingCart = shoppingCart.filter((product) => product.id !== id);
    setShoppingCart(newShoppingCart);
  };

  const totalPrice = (shoppingCart) => {
    return shoppingCart
      .reduce((acc, product) => acc + product.price, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    if (shoppingCart.length === 0) return alert("Your shopping cart is empty");

    let id;

    if (order.length === 0) {
      id = 1;
    } else {
      id = order[order.length - 1].id + 1;
    }

    const newOrder = {
      id: id,
      date: new Date().toLocaleDateString(),
      products: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: totalPrice(shoppingCart),
    };

    setOrder([...order, newOrder]);
    closeCheckoutSideMenu();
    setShoppingCart([]);
    setCount(0);
    setSearchByTitle(null);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } w-[360px] flex flex-col fixed bg-white right-0 border border-black rounded-lg h-[calc(100vh-80px)] z-50 scrollable-cards`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={closeCheckoutSideMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="px-6 flex flex-col gap-5 flex-1">
        {shoppingCart.map((product, index) => {
          return (
            <OrderCard
              key={index}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              handleDelete={handeDelete}
            />
          );
        })}
      </div>

      <div className="px-6 py-2 flex flex-col w-full">
        <hr className="mt-5 mb-2 border-b-1 border-black px-6" />
        <p className="flex justify-between items-center">
          <span className="font-light">Total</span>
          <span className="font-medium text-xl">
            $ {totalPrice(shoppingCart)}
          </span>
        </p>
        <Link to="/my-order/last">
          <button
            className={`${
              shoppingCart.length === 0
                ? "cursor-not-allowed bg-gray-800 text-gray-400"
                : "bg-black text-white"
            } bg-black w-full py-3 my-3 rounded-lg`}
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };

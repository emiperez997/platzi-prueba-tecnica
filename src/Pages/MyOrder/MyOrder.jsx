import { useContext } from "react";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { ShoppingCartContext } from "../../Context/Context";
import { Link, useParams } from "react-router-dom";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  const { id } = useParams();

  let orderToShow =
    id === "last"
      ? order[order.length - 1]
      : order.find((order) => order.id === Number(id));

  return (
    <>
      <div className="flex relative items-center justify-center w-80 text-center mb-6">
        <Link to="/my-orders" className="absolute left-0">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col gap-5 flex-1 w-80">
        {orderToShow?.products.map((product, index) => {
          return (
            <OrderCard
              key={index}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
}

export { MyOrder };

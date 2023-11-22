import { useContext } from "react";
import { OrdersCard } from "../../Components/OrdersCard/OrdersCard";
import { ShoppingCartContext } from "../../Context/Context";
import { Link, useParams } from "react-router-dom";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <div>
      <div className="flex relative items-center justify-center w-80 text-center">
        <h1>My Orders</h1>
      </div>
      <div className="flex flex-col gap-5 mt-2">
        {order.map((order, index) => {
          return (
            <Link key={index} to={`/my-order/${order.id}`}>
              <OrdersCard
                id={order.id}
                date={order.date}
                totalProducts={order.totalProducts}
                totalPrice={order.totalPrice}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export { MyOrders };

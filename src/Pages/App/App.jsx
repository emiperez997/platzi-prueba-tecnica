import { useRoutes, BrowserRouter } from "react-router-dom";
import {
  ShoppingCartContext,
  ShoppingCartProvider,
} from "../../Context/Context";

import { Home } from "../Home/Home";
import { MyAccount } from "../MyAccount/MyAccount";
import { MyOrder } from "../MyOrder/MyOrder";
import { MyOrders } from "../MyOrders/MyOrders";
import { NotFound } from "../NotFound/NotFound";
import { SingIn } from "../SignIn/SignIn";
import "./App.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Layout } from "../../Components/Layout/Layout";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu/CheckoutSideMenu";
import { Register } from "../Register/Register";
import { useContext } from "react";
import { Message } from "../../Components/Message/Message";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:category", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SingIn /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  const { message } = useContext(ShoppingCartContext);

  return (
    <BrowserRouter>
      <Navbar />
      <CheckoutSideMenu />
      <Layout>
        {message.text && message.type && (
          <Message type={message.type}>{message.text}</Message>
        )}
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

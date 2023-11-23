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
import { RequireAuth } from "../../Components/RequireAuth/RequireAuth";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Home />
        </RequireAuth>
      ),
    },
    {
      path: "/:category",
      element: (
        <RequireAuth>
          <Home />
        </RequireAuth>
      ),
    },
    {
      path: "/my-account",
      element: (
        <RequireAuth>
          <MyAccount />
        </RequireAuth>
      ),
    },
    {
      path: "/my-order",
      element: (
        <RequireAuth>
          <MyOrder />
        </RequireAuth>
      ),
    },
    {
      path: "/my-orders",
      element: (
        <RequireAuth>
          <MyOrders />
        </RequireAuth>
      ),
    },
    {
      path: "/my-order/:id",
      element: (
        <RequireAuth>
          <MyOrder />
        </RequireAuth>
      ),
    },
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

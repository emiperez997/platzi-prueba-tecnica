import { NavLink } from "react-router-dom";
import { NavItem } from "./NavItem";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";

function Navbar() {
  let activeStyle = "underline underline-offset-4";

  const { count } = useContext(ShoppingCartContext);

  const { openCheckoutSideMenu } = useContext(ShoppingCartContext);

  const { setSearchByCategory } = useContext(ShoppingCartContext);

  const { isLogin } = useContext(ShoppingCartContext);

  return (
    <nav className="flex justify-between items-center fixed z-50 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shop-e</NavLink>
        </li>
        <li>
          <NavItem
            onClick={() => setSearchByCategory()}
            to="/"
            activeStyle={activeStyle}
          >
            All
          </NavItem>
        </li>
        <li>
          <NavItem
            onClick={() => setSearchByCategory("electronics")}
            to="/electronics"
            activeStyle={activeStyle}
          >
            Electronics
          </NavItem>
        </li>
        <li>
          <NavItem
            onClick={() => setSearchByCategory("jewelery")}
            to="/jewelery"
            activeStyle={activeStyle}
          >
            Jewelery
          </NavItem>
        </li>
        <li>
          <NavItem
            onClick={() => setSearchByCategory("men's clothing")}
            to="/mens-clothing"
            activeStyle={activeStyle}
          >
            Men's Clothing
          </NavItem>
        </li>
        <li>
          <NavItem
            onClick={() => setSearchByCategory("women's clothing")}
            to="/womens-clothing"
            activeStyle={activeStyle}
          >
            Women's Clothing
          </NavItem>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        {isLogin && (
          <>
            <li className="text-black/60">emi@platzi.com</li>
            <li>
              <NavItem to="/my-orders" activeStyle={activeStyle}>
                My Orders
              </NavItem>
            </li>
            <li>
              <NavItem to="/my-account" activeStyle={activeStyle}>
                My Account
              </NavItem>
            </li>
          </>
        )}
        <li>
          <NavItem to="/sign-in" activeStyle={activeStyle}>
            Sign In
          </NavItem>
        </li>
        {isLogin && (
          <li className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={openCheckoutSideMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-black rounded-full text-white text-xs m-2 px-2 py-0.5">
              {count}
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
}

export { Navbar };

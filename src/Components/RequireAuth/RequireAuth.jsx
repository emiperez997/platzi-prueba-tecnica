import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const { userLoged } = useContext(ShoppingCartContext);

  const { setMessage } = useContext(ShoppingCartContext);

  const location = useLocation();

  if (!userLoged) {
    return (
      <Navigate to="/sign-in" state={{ from: location.pathname }} replace />
    );
  } else {
    return children;
  }
}

export { RequireAuth };

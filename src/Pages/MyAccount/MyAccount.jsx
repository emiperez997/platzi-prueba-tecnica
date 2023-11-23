import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import { Link, redirect } from "react-router-dom";

function MyAccount() {
  const { userLoged, setUserLoged } = useContext(ShoppingCartContext);

  const { setMessage } = useContext(ShoppingCartContext);

  const handleLogout = () => {
    setUserLoged(null);
    setMessage({
      text: "User logged out successfully",
      type: "success",
    });
  };

  return (
    <>
      <div className="flex relative items-center justify-center w-80 mb-4 text-center">
        <h1 className="font-medium text-xl">My Account</h1>
      </div>

      <div className="w-80 flex flex-col items-center justify-center border border-black p-4 rounded-lg">
        <h2 className="flex justify-between w-full">
          <span className="font-bold">Username:</span> {userLoged.username}
        </h2>

        <p className="flex justify-between w-full">
          <span className="font-bold">Email:</span> {userLoged.email}
        </p>
      </div>

      <div className="flex flex-col mt-11 gap-5">
        <hr className="mb-2 border-b-1 border-black px-6" />

        <div className="flex flex-col w-full gap-5 justify-center">
          <Link
            to="/my-orders"
            className="border border-black w-80 p-2 rounded-lg focus:outline-none text-center"
          >
            My Orders
          </Link>
        </div>
        <button
          className={`border border-black w-80 p-2 rounded-lg text-white focus:outline-none bg-red-800`}
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export { MyAccount };

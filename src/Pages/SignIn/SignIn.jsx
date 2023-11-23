import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Context";

function SingIn() {
  const { users, setUserLoged, userLoged } = useContext(ShoppingCartContext);

  const { setMessage } = useContext(ShoppingCartContext);

  const { isLogin, saveIsLogin } = useContext(ShoppingCartContext);

  const handleSubmit = (e) => {
    if (userLoged) {
      setUserLoged(null);
      saveIsLogin(false);
      setMessage({
        text: "User logged out successfully",
        type: "success",
      });
    } else {
      e.preventDefault();

      const { email, password } = e.target.elements;

      if (!email.value || !password.value) {
        setMessage({
          text: "Email and password are required",
          type: "error",
        });
        return;
      }

      const user = users.find(
        (user) => user.email === email.value && user.password === password.value
      );

      if (!user) {
        setMessage({
          text: "Email or password invalid",
          type: "error",
        });
        return;
      }

      // Clear inputs
      email.value = "";
      password.value = "";

      setUserLoged(user);
      saveIsLogin(true);

      setMessage({
        text: "User logged successfully",
        type: "success",
      });
    }
  };

  return (
    <>
      <div className="flex relative items-center justify-center w-80 mb-4 text-center">
        <h1 className="font-medium text-xl">Login</h1>
      </div>

      <div>
        <form
          action=""
          className="flex flex-col gap-3 w-80 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between w-80">
            <label htmlFor="email" className="font-semibold">
              Email:
            </label>
            {isLogin ? (
              <p className="border border-transparent font-bold focus:outline-none">
                {userLoged.email}
              </p>
            ) : (
              <input
                type="email"
                id="email"
                name="email"
                className="border border-transparent border-b-black focus:outline-none"
              />
            )}
          </div>
          <div className="flex justify-between w-80">
            <label htmlFor="password" className="font-semibold">
              Password:
            </label>
            {isLogin ? (
              <p className="border border-transparent font-bold focus:outline-none">
                {userLoged.password}
              </p>
            ) : (
              <input
                type="password"
                id="password"
                name="password"
                className="border border-transparent border-b-black focus:outline-none"
                required
              />
            )}
          </div>

          <div className="flex flex-col mt-11 gap-5">
            <button
              className={`border border-black w-80 p-2 rounded-lg text-white focus:outline-none ${
                isLogin ? "bg-red-800" : "bg-black"
              }`}
            >
              {isLogin ? "Logout" : "Login"}
            </button>

            <hr className="mt-5 mb-2 border-b-1 border-black px-6" />

            <div className="flex flex-col w-full gap-5 justify-center">
              <p className="text-center">Don't you have an account?</p>
              <Link
                to="/register"
                className="border border-black w-80 p-2 rounded-lg focus:outline-none text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export { SingIn };

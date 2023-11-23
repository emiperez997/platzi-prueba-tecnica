import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Context";

function Register() {
  const { addUser } = useContext(ShoppingCartContext);

  const { setMessage } = useContext(ShoppingCartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, username, password } = e.target.elements;

    if ((!email.value || !password.value, !username.value)) {
      setMessage({
        text: "Email, username and password are required",
        type: "error",
      });
      return;
    }

    addUser({
      email: email.value,
      username: username.value,
      password: password.value,
      orders: [],
    });

    // Clear inputs
    email.value = "";
    username.value = "";
    password.value = "";

    setMessage({
      text: "User created successfully",
      type: "success",
    });
  };

  return (
    <>
      <div className="flex relative items-center justify-center w-80 mb-4 text-center">
        <h1 className="font-medium text-xl">Register</h1>
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
            <input
              type="email"
              id="email"
              name="email"
              className="border border-transparent border-b-black focus:outline-none"
              required
            />
          </div>
          <div className="flex justify-between w-80">
            <label htmlFor="password" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-transparent border-b-black focus:outline-none"
              required
            />
          </div>

          <div className="flex justify-between w-80">
            <label htmlFor="password" className="font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-transparent border-b-black focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-11 gap-5">
            <button className="border border-black w-80 p-2 rounded-lg bg-black text-white focus:outline-none ">
              Sign up
            </button>

            <hr className="mt-5 mb-2 border-b-1 border-black px-6" />

            <div className="flex flex-col w-full gap-5 justify-center">
              <p className="text-center">Already have an account?</p>
              <Link
                to="/sign-in"
                className="border border-black w-80 p-2 rounded-lg focus:outline-none text-center"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export { Register };

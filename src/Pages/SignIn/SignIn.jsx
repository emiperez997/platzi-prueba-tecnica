function SingIn() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    if (!email.value || !password.value) {
      alert("Please fill all fields");
    }
  };

  return (
    <>
      <div className="flex relative items-center justify-center w-80 mb-4 text-center">
        <h1 className="font-medium text-xl">Products</h1>
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
            />
          </div>
          <div className="flex justify-between w-80">
            <label htmlFor="password" className="font-semibold">
              Password:{" "}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-transparent border-b-black focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-11 gap-5">
            <button className="border border-black w-80 p-2 rounded-lg bg-black text-white focus:outline-none ">
              Login
            </button>

            <button className="border border-black w-80 p-2 rounded-lg focus:outline-none ">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export { SingIn };

import { useContext, useEffect, useState } from "react";
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../Context/Context";
import { renderView } from "./renderView.jsx";

function Home() {
  const { setSearchByTitle } = useContext(ShoppingCartContext);

  const { isLoading, error } = useContext(ShoppingCartContext);

  const { filteredItems } = useContext(ShoppingCartContext);

  const searchProduct = (e) => {
    setSearchByTitle(e.target.value);
  };

  // Reset input
  useEffect(() => {
    return () => {
      setSearchByTitle("");
    };
  }, []);

  return (
    <>
      <div className="flex relative items-center justify-center w-80 mb-4 text-center">
        <h1 className="font-medium text-xl">Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="border border-black w-80 p-2 my-5 rounded-lg focus:outline-none "
        onChange={searchProduct}
      />
      {isLoading && (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-500 text-white text-lg p-3 rounded-lg flex flex-row gap-2 items-center w-80 justify-center">
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
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>

          <p>Something went wrong</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="flex flex-row flex-wrap justify-center gap-3 flex-1 w-3/5">
          {renderView(filteredItems)}
        </div>
      )}
      <ProductDetail />
    </>
  );
}

export { Home };

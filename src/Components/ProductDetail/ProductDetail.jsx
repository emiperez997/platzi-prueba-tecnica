import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";

function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail } =
    useContext(ShoppingCartContext);

  const { productToShow } = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } w-[360px] flex flex-col fixed bg-white right-0 border border-black rounded-lg h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={closeProductDetail}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-[240px] object-cover"
          src={productToShow.image}
          alt={productToShow.title}
        />
        <figcaption className="flex justify-between items-center p-6">
          <h3 className="font-medium text-xl">{productToShow.title}</h3>
          <span className="text-lg font-bold">${productToShow.price}</span>
        </figcaption>
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-bold text-2xl mb-2">${productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
}

export { ProductDetail };

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";

function Message({ children, type }) {
  const { setMessage } = useContext(ShoppingCartContext);

  const clearMessage = () => {
    setMessage("");
  };

  const typeColor = () => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800";
      case "error":
        return "bg-red-100 text-red-800";
      case "default":
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className={`flex my-5 p-4 w-80 justify-between ${typeColor()}`}>
      <p>{children}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        onClick={() => clearMessage()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

export { Message };

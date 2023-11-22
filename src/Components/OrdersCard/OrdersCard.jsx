function OrdersCard({ id, date, totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-center border border-black p-4 w-80 rounded-lg">
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col">
          <span className="bg-gray-800 rounded-lg text-white text-xs p-2">
            {date}
          </span>
          <span className="text-sm">Products: {totalProducts}</span>
        </div>
        <div className="flex flex-row items-center">
          <span className="font-medium text-xl">${totalPrice}</span>
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export { OrdersCard };

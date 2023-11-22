function OrderCard({ id, title, price, image, handleDelete }) {
  return (
    <div className="flex justify-between items-center">
      <section className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </section>
      <section className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {handleDelete && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => handleDelete(id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </section>
    </div>
  );
}

export { OrderCard };

import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  // Product Detail - Show and Hide
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  // Error
  const [error, setError] = useState(false);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart  - Add product
  const [shoppingCart, setShoppingCart] = useState([]);

  // Shopping Cart - Count
  const [count, setCount] = useState(0);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Product Detail - Show and Hide
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  };
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  };

  // Get Products
  const [products, setProducts] = useState(null);

  // Filter Products
  const [filteredItems, setFilteredItems] = useState(null);

  // Search Products
  const [searchByTitle, setSearchByTitle] = useState("");

  // Search by Category
  const [searchByCategory, setSearchByCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(true);
      });

    // Delete searchByTitle when the user leaves the page
    return () => {
      setSearchByTitle("");
    };
  }, []);

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  const filteredItemsByTitle = (items) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredByCategory = (items, category) => {
    return items?.filter((item) => item.category === category);
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          products,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", products, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", products, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy(null, products, searchByTitle, searchByCategory)
      );
  }, [products, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        shoppingCart,
        setShoppingCart,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        filteredItemsByTitle,
        filteredByCategory,
        setSearchByCategory,
        isLoading,
        error,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };

import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  // Estado interno
  const [item, setItem] = useState(initialValue);

  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);

      let parsedItem;
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
        setItem(parsedItem);
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }
    } catch (error) {
      setError(true);
    }
  }, []);

  const saveItem = (newItems) => {
    const stringifyItems = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifyItems);

    setItem(newItems);
  };

  return {
    item,
    saveItem,
    error,
  };
}

export { useLocalStorage };

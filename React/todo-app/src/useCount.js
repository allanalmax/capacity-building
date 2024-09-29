import { useState } from "react";

export const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  const setToZero = () => {
    setCount(0);
  };

  return { count, increaseCount, decreaseCount, setToZero };
};

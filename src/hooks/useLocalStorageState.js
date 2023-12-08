import React, { useEffect, useState } from "react";

export const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() =>
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialState
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, value]);

  return [value, setValue];
};

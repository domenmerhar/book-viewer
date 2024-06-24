import { useState } from "react";
import { LocalBook } from "./useLocalStorageState";
import { useParams } from "react-router-dom";

export function useLocalBook() {
  const { id } = useParams<{ id: string }>();

  const [value] = useState(function () {
    const storedValue = localStorage.getItem("savedBooks");
    const localBooks: LocalBook[] = storedValue
      ? JSON.parse(storedValue)
      : null;

    if (!localBooks) return null;

    return localBooks.find((book) => book.id === Number(id));
  });

  return value;
}

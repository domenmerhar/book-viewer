import React from "react";
import { useSearchParams } from "react-router-dom";
import { useYourBooks } from "../../hooks/useYourBooks";
import { Book } from "../../Interface/book";
import toast from "react-hot-toast";

type addParam = "wishlist" | "reading" | "finished";

export const useBookInfoCard = ({ book }: { book: Book | undefined }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addBook, bookHasProperty } = useYourBooks();

  const defaultValue = searchParams.get("add") || "wishlist";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ add: e.target.value });

    if (bookHasProperty(book!.id.toString(), e.target.value as addParam))
      toast.error(`Book already exists in ${e.target.value}.`);
  };

  const handleClick = () => {
    const location: addParam =
      (searchParams.get("add") as addParam) || "wishlist";

    console.log(location);

    addBook(book!.id.toString(), location);
  };

  return {
    handleChange,
    handleClick,
    defaultValue,
  };
};

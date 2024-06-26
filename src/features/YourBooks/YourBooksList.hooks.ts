import { useSearchParams } from "react-router-dom";
import { useYourBooks } from "../../hooks/useYourBooks";
import { useSavedBooks } from "../../hooks/useSavedBooks";
import { sortBooks, sortType } from "../../utils/sortBooks";
import toast from "react-hot-toast";
import { Book } from "../../Interface/book";

const options = [
  "added (oldest first)",
  "added (newest first)",
  "oldest",
  "youngest",
  "title",
  "author",
];

type category = "wishlist" | "reading" | "finished";

export const useYourBooksList = () => {
  const [searchParams] = useSearchParams();
  const { savedBooks: localBooks } = useYourBooks();

  const category = (searchParams.get("category") as category) || "wishlist";
  const currentCategory: category = category;

  const {
    data: savedBooks,
    error,
    isLoading,
  } = useSavedBooks(currentCategory, localBooks);

  const sort: sortType = (searchParams.get("sort") as sortType) || options[0];

  if (error) {
    toast.error("An error occurred, please try again later.");
  }

  let sortedBooks: Book[] = [];

  if (!isLoading && !error) sortedBooks = sortBooks(savedBooks, sort);

  return {
    isLoading,
    sortedBooks,
  };
};

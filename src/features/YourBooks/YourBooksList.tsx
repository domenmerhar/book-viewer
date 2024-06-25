import { List } from "../../utils/List";
import { CardSmall } from "./CardSmall";
import { Book } from "../../Interface/Book";
import { useSavedBooks } from "../../hooks/useSavedBooks";
import toast from "react-hot-toast";
import { sortBooks, sortType } from "../../utils/sortBooks";
import { SpinnerBig } from "../../utils/SpinnerBig";
import { useSearchParams } from "react-router-dom";
import { useYourBooks } from "../../hooks/useYourBooks";

const options = [
  "added (oldest first)",
  "added (newest first)",
  "oldest",
  "youngest",
  "title",
  "author",
];

type category = "wishlist" | "reading" | "finished";

export const YourBooksList = () => {
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
    return null;
  }
  if (isLoading) return <SpinnerBig loading={true} />;

  const sortedBooks = sortBooks(savedBooks, sort);
  return (
    <List
      itemWidth={415}
      renderFn={() =>
        sortedBooks.map((book: Book) => (
          <CardSmall
            key={book.id}
            id={book.id}
            image={book.formats["image/jpeg"]}
            title={book.title}
            author={book.authors[0].name}
          />
        ))
      }
    />
  );
};

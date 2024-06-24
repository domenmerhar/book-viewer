import toast from "react-hot-toast";
import { LocalBook } from "../hooks/useLocalStorageState";
import { useSavedBooks } from "../hooks/useSavedBooks";
import { List } from "../utils/List";
import { SpinnerBig } from "../utils/SpinnerBig";

export const YourBooks = () => {
  const { data: savedBooks, error, isLoading } = useSavedBooks("wishlist");

  if (error) {
    toast.error("An error occurred, please try again later.");
    return null;
  }
  if (isLoading) return <SpinnerBig loading={true} />;

  return (
    <List
      itemWidth={300}
      renderFn={() =>
        savedBooks.map((book: LocalBook) => (
          <div>
            <p>{book.id}</p>
            <p>{book.collection}</p>
          </div>
        ))
      }
    />
  );
};

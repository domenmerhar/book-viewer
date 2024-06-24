import toast from "react-hot-toast";
import { LocalBook } from "../hooks/useLocalStorageState";
import { useSavedBooks } from "../hooks/useSavedBooks";
import { List } from "../utils/List";
import { SpinnerBig } from "../utils/SpinnerBig";
import { SelectSearch } from "../utils/SelectSearch";
import { useSearchParams } from "react-router-dom";

export const YourBooks = () => {
  const { data: savedBooks, error, isLoading } = useSavedBooks("wishlist");
  const [searchParams, setSearchParams] = useSearchParams();

  if (error) {
    toast.error("An error occurred, please try again later.");
    return null;
  }
  if (isLoading) return <SpinnerBig loading={true} />;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ sort: e.target.value });
  };

  const options = [
    "added (oldest first)",
    "added (newest first)",
    "youngest",
    "oldest",
    "title",
    "author",
  ];

  return (
    <>
      <SelectSearch
        defaultValue="added (oldest first)"
        values={options}
        onChange={handleChange}
      />

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
    </>
  );
};

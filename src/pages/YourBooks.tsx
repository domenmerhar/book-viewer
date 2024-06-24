import toast from "react-hot-toast";
import { LocalBook } from "../hooks/useLocalStorageState";
import { useSavedBooks } from "../hooks/useSavedBooks";
import { List } from "../utils/List";
import { SpinnerBig } from "../utils/SpinnerBig";
import { SelectSearch } from "../utils/SelectSearch";
import { useSearchParams } from "react-router-dom";
import { Categories } from "../features/YourBooks/Categories";
import { CardSmall } from "../features/YourBooks/CardSmall";
import { Book } from "../Interface/Book";
import { Books } from "./Books";
import { sortBooks, sortType } from "../utils/sortBooks";

const options = [
  "added (oldest first)",
  "added (newest first)",
  "oldest",
  "youngest",
  "title",
  "author",
];

type category = "wishlist" | "reading" | "finished";

const categories = ["wishlist", "reading", "finished"];

export const YourBooks = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = (searchParams.get("category") as category) || "wishlist";
  const currentCategory: category = category;

  const { data: savedBooks, error, isLoading } = useSavedBooks(currentCategory);

  if (error) {
    toast.error("An error occurred, please try again later.");
    return null;
  }
  if (isLoading) return <SpinnerBig loading={true} />;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = Object.fromEntries(searchParams.entries());

    // Update the 'sort' parameter while preserving others
    setSearchParams({ ...params, sort: e.target.value });
    //setSearchParams({ sort: e.target.value });
  };

  const sort: sortType = (searchParams.get("sort") as sortType) || options[0];

  const sortedBooks = sortBooks(savedBooks, sort);

  return (
    <>
      <Categories categories={categories} />

      <SelectSearch
        defaultValue={sort}
        values={options}
        onChange={handleChange}
      />

      <List
        itemWidth={415}
        renderFn={() =>
          sortedBooks.map((book: Book) => (
            <CardSmall
              key={book.id}
              image={book.formats["image/jpeg"]}
              title={book.title}
              author={book.authors[0].name}
            />
          ))
        }
      />
    </>
  );
};

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

const options = [
  "added (oldest first)",
  "added (newest first)",
  "youngest",
  "oldest",
  "title",
  "author",
];

type category = "wishlist" | "reading" | "finished";

const categories = ["wishlist", "reading", "finished"];

export const YourBooks = () => {
  const [searchParams] = useSearchParams();
  const currentCategory: category =
    (searchParams.get("category") as category) || "wishlist";

  const { data: savedBooks, error, isLoading } = useSavedBooks(currentCategory);

  if (error) {
    toast.error("An error occurred, please try again later.");
    return null;
  }
  if (isLoading) return <SpinnerBig loading={true} />;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ sort: e.target.value });
  };

  return (
    <>
      <Categories categories={categories} />

      <SelectSearch
        defaultValue="added (oldest first)"
        values={options}
        onChange={handleChange}
      />

      <List
        itemWidth={415}
        renderFn={() =>
          savedBooks.map((book: Book) => (
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

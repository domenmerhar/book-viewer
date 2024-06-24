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

const categories = ["wishlist", "reading", "read"];

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

  console.log(savedBooks);

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

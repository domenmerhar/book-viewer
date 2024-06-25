import toast from "react-hot-toast";
import { useSavedBooks } from "../hooks/useSavedBooks";
import { List } from "../utils/List";
import { SpinnerBig } from "../utils/SpinnerBig";
import { SelectSearch } from "../utils/SelectSearch";
import { useSearchParams } from "react-router-dom";
import { Categories } from "../features/YourBooks/Categories";
import { CardSmall } from "../features/YourBooks/CardSmall";
import { Book } from "../Interface/Book";
import { sortBooks, sortType } from "../utils/sortBooks";
import { Row } from "../utils/Row";
import { Heading } from "../utils/Heading";
import ExpandingList from "../utils/ExpandingList";
import { useYourBooks } from "../hooks/useYourBooks";

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
  const { savedBooks: localBooks } = useYourBooks();

  const category = (searchParams.get("category") as category) || "wishlist";
  const currentCategory: category = category;

  const {
    data: savedBooks,
    error,
    isLoading,
  } = useSavedBooks(currentCategory, localBooks);

  if (error) {
    toast.error("An error occurred, please try again later.");
    return null;
  }
  if (isLoading) return <SpinnerBig loading={true} />;

  const sort: sortType = (searchParams.get("sort") as sortType) || options[0];
  const sortedBooks = sortBooks(savedBooks, sort);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...params, sort: e.target.value });
  };

  return (
    <>
      <Row justifyContent="space-between">
        <Categories categories={categories} />

        <Row gap="16px" alignItems="center">
          <Heading type="secondary">Sort by: </Heading>
          <SelectSearch
            defaultValue={sort}
            values={options}
            onChange={handleChange}
          />
        </Row>
      </Row>

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
    </>
  );
};

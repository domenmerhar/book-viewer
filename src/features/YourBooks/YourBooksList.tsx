import { List } from "../../utils/List";
import { CardSmall } from "./CardSmall";
import { Book } from "../../Interface/book";
import { SpinnerBig } from "../../utils/SpinnerBig";
import { useYourBooksList } from "./YourBooksList.hooks";

export const YourBooksList = () => {
  const { isLoading, sortedBooks } = useYourBooksList();

  if (isLoading) return <SpinnerBig loading={true} />;

  return (
    <List
      width={415}
      renderFn={() =>
        sortedBooks.map((book: Book) => {
          return (
            <CardSmall
              key={book?.id}
              id={book?.id}
              image={book?.formats["image/jpeg"]}
              title={book?.title}
              author={book?.authors[0].name}
            />
          );
        })
      }
    />
  );
};

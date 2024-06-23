import React from "react";
import { Card } from "./Card";
import { List } from "../../utils/List";
import { useBooks } from "../../hooks/useBooks";
import toast from "react-hot-toast";
import { SpinnerBig } from "../../utils/SpinnerBig";

export const BookList = () => {
  const { books, error, isLoading } = useBooks();

  if (error) return toast.error("An error occurred");

  if (isLoading) return <SpinnerBig loading={isLoading} />;

  const render: () => React.ReactNode[] = () =>
    books!.results.map((book) => (
      <li>
        <Card
          key={book.id}
          title={book.title}
          subTitle={book.authors[0].name}
          imageSource={book.formats["image/jpeg"]}
          to={`/books/${book.id}`}
        />
      </li>
    ));

  return <List itemWidth={300} renderFn={render} />;
};

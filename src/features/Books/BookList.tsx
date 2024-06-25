import React from "react";
import { Card } from "./Card";
import { List } from "../../utils/List";
import { useBooks } from "../../hooks/useBooks";
import toast from "react-hot-toast";
import { SpinnerBig } from "../../utils/SpinnerBig";
import { BooksData } from "../../Interface/Book";

export const BookList = () => {
  const { data, error, isLoading } = useBooks();

  if (error) return toast.error("An error occurred");

  if (isLoading) return <SpinnerBig loading={isLoading} />;

  const pages = data?.pages;

  const render: () => React.ReactNode[] = () =>
    pages!.map((books: BooksData) =>
      books!.results.map((book) => (
        <li key={book.id}>
          <Card
            title={book.title}
            subTitle={book.authors[0].name}
            imageSource={book.formats["image/jpeg"]}
            to={`/books/${book.id}`}
          />
        </li>
      ))
    );

  return <List itemWidth={300} renderFn={render} />;
};

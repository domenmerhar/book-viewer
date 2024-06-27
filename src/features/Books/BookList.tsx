import React from "react";
import { Card } from "./Card";
import { List } from "../../utils/List";
import toast from "react-hot-toast";
import { SpinnerBig } from "../../utils/SpinnerBig";
import { BooksData } from "../../Interface/book";
import { Heading } from "../../utils/Heading";
import { useBookList } from "./BookList.hooks";

export const BookList = () => {
  const { data, pages, error, isLoading, invalidPage, ref, inView } =
    useBookList();

  if (error) return toast.error("An error occurred");
  if (isLoading) return <SpinnerBig loading={isLoading} />;

  if (invalidPage && data?.pages.length === 1) return <h1>No results found</h1>;

  const render: () => React.ReactNode[] = () =>
    pages!.map((books: BooksData) =>
      books?.results?.map((book) => (
        <li key={book.id}>
          <Card
            title={book.title}
            subTitle={book?.authors[0]?.name}
            imageSource={book.formats["image/jpeg"]}
            to={`/books/${book.id}&author=${book?.authors[0]?.name}`}
          />
        </li>
      ))
    );

  return (
    <>
      <List itemWidth={300} renderFn={render} />
      <div ref={ref}>
        {inView && !invalidPage ? (
          <SpinnerBig loading />
        ) : (
          <div>
            <Heading type="primary">All books found.</Heading>
            <Heading type="secondary">
              For more books please search for another title or author name.
            </Heading>
          </div>
        )}
      </div>
    </>
  );
};

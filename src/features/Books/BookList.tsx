import React, { useEffect } from "react";
import { Card } from "./Card";
import { List } from "../../utils/List";
import { useBooks } from "../../hooks/useBooks";
import toast from "react-hot-toast";
import { SpinnerBig } from "../../utils/SpinnerBig";
import { BooksData } from "../../Interface/Book";
import { useInView } from "react-intersection-observer";
import { Heading } from "../../utils/Heading";

interface InvalidPage {
  detail: "Invalid page.";
}

export const BookList = () => {
  const { data, error, isLoading, fetchNextPage } = useBooks();
  const { ref, inView } = useInView();

  const invalidPage =
    data?.pages?.[0]?.count === undefined ||
    data?.pages?.[0]?.count === 0 ||
    (data?.pages[data?.pages.length - 1] as unknown as InvalidPage)?.detail ===
      "Invalid page.";

  useEffect(() => {
    if (inView && !invalidPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, invalidPage]);

  if (error) return toast.error("An error occurred");

  if (isLoading) return <SpinnerBig loading={isLoading} />;

  const pages = data?.pages;

  if (invalidPage && data?.pages.length === 1) return <h1>No results found</h1>;

  const render: () => React.ReactNode[] = () =>
    pages!.map((books: BooksData) =>
      books?.results?.map((book) => (
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

import { Book } from "../Interface/book";

export type sortType =
  | "added (oldest first)"
  | "added (newest first)"
  | "oldest"
  | "youngest"
  | "title"
  | "author";

export const sortBooks = (books: Book[], sort: sortType) => {
  const sortedBooks = [...books];

  switch (sort) {
    case "added (oldest first)":
      return sortedBooks;
    case "added (newest first)":
      return sortedBooks.reverse();
    case "oldest":
      return sortedBooks.sort(
        (a, b) =>
          (a?.authors[0]?.birth_year || Infinity) -
          (b?.authors[0]?.birth_year || Infinity)
      );
    case "youngest":
      return sortedBooks.sort(
        (a, b) =>
          (b?.authors[0]?.birth_year || 0) - (a?.authors[0]?.birth_year || 0)
      );
    case "title":
      return sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    case "author":
      return sortedBooks.sort((a, b) =>
        a.authors[0].name.localeCompare(b.authors[0].name)
      );
    default:
      return sortedBooks;
  }
};

import { Book } from "../Interface/Book";

export type sortType =
  | "added (oldest first)"
  | "added (newest first)"
  | "oldest"
  | "youngest"
  | "title"
  | "author";

export const sortBooks = (books: Book[], sort: sortType) => {
  switch (sort) {
    case "added (oldest first)":
      return books;
    case "added (newest first)":
      return books.reverse();
    case "oldest":
      return books.sort(
        (a, b) =>
          (a?.authors[0]?.birth_year || 0) - (b?.authors[0]?.birth_year || 0)
      );
    case "youngest":
      return books.sort(
        (a, b) =>
          (a?.authors[0]?.birth_year || 0) + (b?.authors[0]?.birth_year || 0)
      );
    case "title":
      return books.sort((a, b) => a.title.localeCompare(b.title));
    case "author":
      return books.sort((a, b) =>
        a.authors[0].name.localeCompare(b.authors[0].name)
      );
    default:
      return books;
  }
};

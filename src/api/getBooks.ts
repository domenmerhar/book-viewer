import { GUTENDEX_URL } from "./config";

interface TitleAuthor {
  title: string;
  author: string;
  page: number;
  sort: "popular" | "ascending" | "descending";
}

export const getBooks = async ({ title, author, sort, page }: TitleAuthor) => {
  let url = `${GUTENDEX_URL}books/`;
  url = `${url}?page=${page}`;

  if (title || author)
    url = `${url}&search=${title.toLowerCase()}${
      author && `%20${author.toLowerCase()}&page=${page}`
    }`;

  if (sort) url = `${url}&sort=${sort}`;

  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

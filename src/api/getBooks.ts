import { GUTENDEX_URL } from "./config";

interface TitleAuthor {
  title: string;
  author: string;
  page: number;
}

export const getBooks = async ({ title, author, page }: TitleAuthor) => {
  let url = `${GUTENDEX_URL}books/`;

  if (title || author)
    url = `${url}?search=${title.toLowerCase()}${
      author && `%20${author.toLowerCase()}&page=${page}`
    }`;
  else url = `${url}?page=${page}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

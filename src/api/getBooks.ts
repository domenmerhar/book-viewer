import { GUTENDEX_URL } from "./config";

interface TitleAuthor {
  title: string;
  author: string;
  page: number;
}

export const getBooks = async ({ title, author }: TitleAuthor) => {
  let url = `${GUTENDEX_URL}books/`;

  if (title || author)
    url = `${url}?search=${title.toLowerCase()}${
      author && `%20${author.toLowerCase()}`
    }`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

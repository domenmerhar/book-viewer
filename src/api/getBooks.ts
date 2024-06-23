import { GUTENDEX_URL } from "./config";

export const getBooks = async () => {
  const response = await fetch(`${GUTENDEX_URL}books/`);
  const data = await response.json();
  return data;
};

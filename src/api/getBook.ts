import { GUTENDEX_URL } from "./config";

export const getBook = async (id: string) => {
  const response = await fetch(`${GUTENDEX_URL}/books/${id}`);
  const data = await response.json();
  return data;
};

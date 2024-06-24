import { GUTENDEX_URL } from "./config";

export const getBooksById = async (...ids: string[]) => {
  const response = await fetch(`${GUTENDEX_URL}/books/?ids=${ids.join(",")}`);
  const data = await response.json();
  return data;
};

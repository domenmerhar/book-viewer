import { useQuery } from "@tanstack/react-query";
import { LocalBook, useLocalStorageState } from "./useLocalStorageState";
import { getBooksById } from "../api/getBooksById";

type category = "wishlist" | "reading" | "finished";

export const useSavedBooks = (type: category) => {
  const [savedBooks] = useLocalStorageState([], "savedBooks");

  const bookIds = savedBooks
    .filter((book: LocalBook[]) => book[type])
    .map((book: { id: number }) => book.id);

  const {
    data: dataApi,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["savedBooks", type],
    queryFn: () => getBooksById(bookIds),
  });

  if (bookIds.length === 0) return { data: [], error: null, isLoading: false };

  return {
    data: dataApi?.results ?? [],
    error,
    isLoading,
  };
};

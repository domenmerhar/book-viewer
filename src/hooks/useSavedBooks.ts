import { useQuery } from "@tanstack/react-query";
import { LocalBook } from "./useLocalStorageState";
import { getBooksById } from "../api/getBooksById";

type category = "wishlist" | "reading" | "finished";

export const useSavedBooks = (type: category, savedBooks: LocalBook[]) => {
  const bookIds: { id: string }[] = savedBooks
    .filter((book: LocalBook) => book[type])
    .map((book: LocalBook) => book.id);

  const length = bookIds.length;

  const {
    data: dataApi,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["savedBooks", type, length],
    queryFn: () => getBooksById(bookIds),
  });

  if (bookIds.length === 0) return { data: [], error: null, isLoading: false };

  return {
    data: dataApi?.results ?? [],
    error,
    isLoading,
  };
};

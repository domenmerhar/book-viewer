import { useQuery } from "@tanstack/react-query";
import { LocalBook, useLocalStorageState } from "./useLocalStorageState";
import { getBooksById } from "../api/getBooksById";

export const useSavedBooks = (type: "wishlist" | "reading" | "finished") => {
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

  return {
    data: dataApi?.results ?? [],
    error,
    isLoading,
  };
};

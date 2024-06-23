import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/getBooks";
import { BooksData } from "../Interface/Book";

export const useBooks = () => {
  const {
    data: books,
    error,
    isLoading,
  }: {
    data: BooksData | undefined;
    error: Error | null;
    isLoading: boolean;
  } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    staleTime: Infinity,
  });

  return { books, error, isLoading };
};

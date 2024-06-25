import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/getBooks";
import { BooksData } from "../Interface/Book";
import { useSearchParams } from "react-router-dom";

export const useBooks = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const author = searchParams.get("author") || "";

  const {
    data: books,
    error,
    isLoading,
  }: {
    data: BooksData | undefined;
    error: Error | null;
    isLoading: boolean;
  } = useQuery({
    queryKey: ["books", title, author],
    queryFn: () => getBooks({ title, author }),
    staleTime: Infinity,
  });

  return { books, error, isLoading };
};

import { useQuery } from "@tanstack/react-query";
import { getBook } from "../api/getBook";
import { useParams } from "react-router-dom";
import { Book } from "../Interface/book";

export const useBook = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: book,
    error,
    isLoading,
  }: {
    data: Book | undefined;
    error: Error | null;
    isLoading: boolean;
  } = useQuery({
    queryKey: ["book", id],
    queryFn: ({ queryKey }) => {
      const bookId = queryKey[1]?.split("&")[0];

      if (!bookId) {
        throw new Error("Book ID is undefined");
      }

      return getBook(bookId);
    },
    enabled: !!id, // Only run the query if id is defined
  });

  return { book, error, isLoading };
};

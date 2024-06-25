import { useInfiniteQuery } from "@tanstack/react-query";
import { getBooks } from "../api/getBooks";
import { BooksData } from "../Interface/Book";
import { useSearchParams } from "react-router-dom";

export const useBooks = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const author = searchParams.get("author") || "";

  const {
    data,
    error,
    isLoading,
  }: {
    data: { pages: BooksData[] } | undefined;
    error: Error | null;
    isLoading: boolean;
  } = useInfiniteQuery({
    queryKey: ["books", title, author],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getBooks({ title, author, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return { data, error, isLoading };
};

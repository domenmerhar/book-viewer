import { useInfiniteQuery } from "@tanstack/react-query";
import { getBooks } from "../api/getBooks";
import { BooksData } from "../Interface/book";
import { useSearchParams } from "react-router-dom";

export const useBooks = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const author = searchParams.get("author") || "";
  const sort =
    (searchParams.get("sort") as "popular" | "ascending" | "descending") ||
    "popular";

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
  }: {
    data: { pages: BooksData[] } | undefined;
    error: Error | null;
    isLoading: boolean;
    fetchNextPage: () => void;
  } = useInfiniteQuery({
    queryKey: ["books", title, author, sort],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getBooks({ title, author, sort, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });

  return { data, error, isLoading, fetchNextPage };
};

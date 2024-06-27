import { useInfiniteQuery } from "@tanstack/react-query";
import { getBooks } from "../api/getBooks";
import { BooksData } from "../Interface/book";
import { useParams, useSearchParams } from "react-router-dom";

export const useBooks = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams<{ id: string }>();

  const title = searchParams.get("title") || "";
  const author =
    searchParams.get("author") ||
    id?.split("=")[1].split(" ").join("+").replace(",", "") ||
    "";
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
    getNextPageParam: (lastPage) => {
      return lastPage.next || "2";
    },
  });

  return { data, error, isLoading, fetchNextPage };
};

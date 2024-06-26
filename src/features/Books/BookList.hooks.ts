import { useInView } from "react-intersection-observer";
import { useBooks } from "../../hooks/useBooks";
import { useEffect } from "react";

interface InvalidPage {
  detail: "Invalid page.";
}

export const useBookList = () => {
  const { data, error, isLoading, fetchNextPage } = useBooks();
  const { ref, inView } = useInView();

  const invalidPage =
    data?.pages?.[0]?.count === undefined ||
    data?.pages?.[0]?.count === 0 ||
    (data?.pages[data?.pages.length - 1] as unknown as InvalidPage)?.detail ===
      "Invalid page.";

  useEffect(() => {
    if (inView && !invalidPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, invalidPage]);

  const pages = data?.pages;

  return { data, pages, error, isLoading, invalidPage, ref, inView };
};

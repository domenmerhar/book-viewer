import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/getBooks";

interface Person {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

interface Book {
  id: number;
  title: string;
  authors: Person[];
  translators: Person[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: { [key: string]: string };
  download_count: number;
}

interface BooksData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}

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

import { LocalBook, useLocalStorageState } from "./useLocalStorageState";
import { useParams } from "react-router-dom";

export function useLocalBook() {
  const { id } = useParams<{ id: string }>();

  const [savedBooks] = useLocalStorageState([], "savedBooks");
  console.log(savedBooks);

  const book = savedBooks.find((curr: LocalBook) => curr.id === Number(id));

  return book;
}

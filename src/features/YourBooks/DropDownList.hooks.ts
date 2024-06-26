import { useSearchParams } from "react-router-dom";
import { bookLocationType, useYourBooks } from "../../hooks/useYourBooks";
import { listClickType } from "../../utils/ExpandingList";

interface useDropDownListProps {
  id: number;
  listClick?: listClickType;
}

export const useDropDownList = ({ id, listClick }: useDropDownListProps) => {
  const [searchParams] = useSearchParams();
  const category: bookLocationType =
    (searchParams.get("category") as bookLocationType) || "wishlist";

  const { removeBookCategory, addBook, getBook } = useYourBooks();

  const book = getBook(`${id}`);

  const handleDelete = () => {
    removeBookCategory(
      `${id}`,
      searchParams.get("category") as bookLocationType
    );
    listClick!();
  };

  const handleAdd = (categoryToAdd: bookLocationType) => {
    return () => {
      addBook(`${id}`, categoryToAdd);
      listClick!();
    };
  };

  return { book, handleAdd, handleDelete, category };
};

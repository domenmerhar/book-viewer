import React from "react";
import styled from "styled-components";
import { listClickType } from "../../utils/ExpandingList";
import {
  HiOutlineBookOpen,
  HiOutlineCheck,
  HiOutlineTrash,
} from "react-icons/hi";
import { bookLocationType, useYourBooks } from "../../hooks/useYourBooks";
import { useSearchParams } from "react-router-dom";

interface DropDownListProps {
  id: number;
  listClick?: listClickType;
}

const Ul = styled.ul`
  list-style: none;
  background-color: var(--gray-2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 250px;
`;

const Li = styled.li`
  padding: 10px 20px;
  color: var(--black);

  display: flex;
  align-items: center;
  gap: 12px;

  & :first-child {
    size: 2px;
    font-size: 24px;
  }
`;

export const DropDownList: React.FC<DropDownListProps> = ({
  id,
  listClick,
}) => {
  const [searchParams] = useSearchParams();
  const category: bookLocationType = searchParams.get("category") as
    | bookLocationType
    | "wishlist";

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
    () => {
      addBook(`${id}`, categoryToAdd);
      listClick!();
    };
  };

  return (
    <Ul>
      <Li onClick={handleDelete}>
        <HiOutlineTrash />
        Remove from {category}
      </Li>

      {!book?.wishlist && (
        <Li onClick={() => handleAdd("wishlist")}>
          <HiOutlineBookOpen />
          Add to reading
        </Li>
      )}

      {!book?.reading && "reading" && (
        <Li onClick={() => handleAdd("reading")}>
          <HiOutlineBookOpen />
          Add to reading
        </Li>
      )}

      {!book?.finished && "finished" && (
        <Li onClick={() => handleAdd("finished")}>
          <HiOutlineCheck />
          Add to finished
        </Li>
      )}
    </Ul>
  );
};

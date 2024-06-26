import React from "react";
import styled from "styled-components";
import { listClickType } from "../../utils/ExpandingList";
import {
  HiOutlineBookOpen,
  HiOutlineCheck,
  HiOutlineTrash,
} from "react-icons/hi";
import { useDropDownList } from "./DropDownList.hooks";

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

  & :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  & :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const Li = styled.li`
  padding: 10px 20px;
  color: var(--black);

  display: flex;
  align-items: center;
  gap: 12px;

  overflow: hidden;
  transition: background-color 200ms;

  & :first-child {
    size: 2px;
    font-size: 24px;
  }

  &:hover {
    background-color: var(--gray-3);
    cursor: pointer;
  }
`;

export const DropDownList: React.FC<DropDownListProps> = ({
  id,
  listClick,
}) => {
  const { book, handleAdd, handleDelete, category } = useDropDownList({
    id,
    listClick,
  });

  return (
    <Ul>
      <Li onClick={handleDelete}>
        <HiOutlineTrash />
        Remove from {category}
      </Li>

      {!book?.wishlist && (
        <Li onClick={handleAdd("wishlist")}>
          <HiOutlineBookOpen />
          Add to reading
        </Li>
      )}

      {!book?.reading && "reading" && (
        <Li onClick={handleAdd("reading")}>
          <HiOutlineBookOpen />
          Add to reading
        </Li>
      )}

      {!book?.finished && "finished" && (
        <Li onClick={handleAdd("finished")}>
          <HiOutlineCheck />
          Add to finished
        </Li>
      )}
    </Ul>
  );
};

import React from "react";
import styled from "styled-components";
import { listClickType } from "../../utils/ExpandingList";

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
`;

export const DropDownList: React.FC<DropDownListProps> = ({
  id,
  listClick,
}) => {
  const handleClick = () => {
    if (listClick) listClick();
  };

  return (
    <Ul>
      <Li onClick={handleClick}>Remove</Li>
      <Li onClick={handleClick}>Add to reading</Li>
      <Li onClick={handleClick}>Add to finished</Li>
    </Ul>
  );
};

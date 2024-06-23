import React from "react";
import styled from "styled-components";

interface ListProps {
  renderFn: () => React.ReactNode[];
  itemWidth: number;
}

interface StyledListProps {
  itemWidth: number;
}

const StyledList = styled.ul<StyledListProps>`
  width: 100%;
  list-style: none;

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, ${(props) => props.itemWidth}px);
  grid-row-gap: 64px;

  @media (max-width: 1060px) {
    grid-row-gap: 32px;
  }

  transition: all 200ms ease-in;
`;

export const List: React.FC<ListProps> = ({ itemWidth, renderFn }) => {
  return <StyledList itemWidth={itemWidth}>{renderFn()}</StyledList>;
};

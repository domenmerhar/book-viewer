import React from "react";
import styled from "styled-components";

interface ListProps {
  renderFn: (item: unknown) => React.ReactNode;
  itemWidth: number;
}

interface StyledListProps {
  itemWidth: number;
}

const StyledList = styled.ul<StyledListProps>`
  width: 100%;
  list-style: none;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, ${(props) => props.itemWidth}px);
`;

export const List: React.FC = ({ itemWidth, children }) => {
  return <StyledList itemWidth={itemWidth}>{children}</StyledList>;
};

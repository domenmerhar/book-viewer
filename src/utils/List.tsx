import React from "react";
import styled from "styled-components";

interface ListProps {
  renderFn: () => React.ReactNode[];
  itemWidth: number;
  gapy?: number;
}

interface StyledListProps {
  itemWidth: number;
  gapy?: number;
}

const StyledList = styled.ul<StyledListProps>`
  width: 100%;
  list-style: none;

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, ${(props) => props.itemWidth}px);
  grid-row-gap: ${(props) => props.gapy}px;

  @media (max-width: 1060px) {
    grid-row-gap: 32px;
  }

  transition: all 200ms ease-in;
`;

export const List: React.FC<ListProps> = ({
  itemWidth,
  renderFn,
  gapy = 64,
}) => {
  return (
    <StyledList gapy={gapy} itemWidth={itemWidth}>
      {renderFn()}{" "}
    </StyledList>
  );
};

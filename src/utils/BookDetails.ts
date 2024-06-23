import styled from "styled-components";

interface ColumnProps {
  gap?: string;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;

  ${(props) => props.gap && `gap: ${props.gap};`}
`;

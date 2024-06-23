import styled from "styled-components";

interface RowProps {
  gap?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;

  ${(props) => props.gap && `gap: ${props.gap};`}
`;

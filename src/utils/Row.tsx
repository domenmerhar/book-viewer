import styled from "styled-components";

interface RowProps {
  gap?: string;
  justifyContent?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;

  ${(props) => props.gap && `gap: ${props.gap};`}
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent};`}
`;

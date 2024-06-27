import styled from "styled-components";

interface ColumnProps {
  gap?: string;
  justifycontent?: string;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;

  ${(props) => props.gap && `gap: ${props.gap};`}
  ${(props) =>
    props.justifycontent && `justify-content: ${props.justifycontent};`}
`;

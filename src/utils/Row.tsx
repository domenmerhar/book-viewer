import styled from "styled-components";

type flexAlignJustify =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

interface RowProps {
  gap?: string;
  justifycontent?: flexAlignJustify;
  alignItems?: flexAlignJustify;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;

  ${(props) => props.gap && `gap: ${props.gap};`}
  ${(props) =>
    props.justifycontent && `justify-content: ${props.justifycontent};`}
    ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
`;

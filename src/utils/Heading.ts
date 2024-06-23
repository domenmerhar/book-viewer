import styled, { css } from "styled-components";

interface HeadingProps {
  type: "primary" | "secondary";
  allignment?: "center" | "left";
  fontSize?: string;
}

export const Heading = styled.h1<HeadingProps>`
  color: var(--black);

  ${(props) => css`
    text-align: ${props.allignment || "left"};
  `}

  ${(props) =>
    props.type === "primary" &&
    css`
      font-weight: 700;
      font-size: props.fontSize || "20px";
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      font-size: props.fontSize || "16px";
    `}
`;

import styled, { css } from "styled-components";

interface HeadingProps {
  type: "primary" | "secondary";
  allignment?: "center" | "left";
  fontSize?: string;
  width?: string;
  color?: string;
}

export const Heading = styled.h1<HeadingProps>`
  ${(props) => css`
    text-align: ${props.allignment || "left"};
    width: ${props.width || "auto"};
    color: ${props.color || "var(--black)"};
  `}

  ${(props) =>
    props.type === "primary" &&
    css`
      font-weight: 800;
      font-size: ${props.fontSize || "20px"}; // Added a comma here
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      font-weight: 400;
      font-size: ${props.fontSize || "16px"}; // Added a comma here
    `}
`;

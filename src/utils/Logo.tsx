import React from "react";
import styled from "styled-components";

interface LogoProps {
  fontSize?: string;
  paddingX?: string;
  paddingY?: string;
}

const StyledLogo = styled.p<LogoProps>`
  font-size: ${(props) => props.fontSize};

  padding: ${(props) => `${props.paddingY} ${props.paddingX}`};

  font-family: "Pirata one", sans-serif;
  color: white;
`;

export const Logo: React.FC<LogoProps> = ({
  fontSize = "32px",
  paddingX = "0px",
  paddingY = "0px",
}) => {
  return (
    <StyledLogo fontSize={fontSize} paddingX={paddingX} paddingY={paddingY}>
      BookViewer
    </StyledLogo>
  );
};

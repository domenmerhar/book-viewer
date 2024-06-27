import React from "react";
import styled from "styled-components";

interface LogoProps {
  fontSize?: string;
  paddingx?: string;
  paddingY?: string;
}

const StyledLogo = styled.p<LogoProps>`
  font-size: ${(props) => props.fontSize};

  padding: ${(props) => `${props.paddingY} ${props.paddingx}`};

  font-family: "Pirata one", sans-serif;
  color: white;
`;

export const Logo: React.FC<LogoProps> = ({
  fontSize = "32px",
  paddingx = "0px",
  paddingY = "0px",
}) => {
  return (
    <StyledLogo fontSize={fontSize} paddingx={paddingx} paddingY={paddingY}>
      BookViewer
    </StyledLogo>
  );
};

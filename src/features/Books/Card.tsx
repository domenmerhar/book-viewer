import React from "react";
import styled from "styled-components";
import { Heading } from "../../utils/Heading";
import { NavLink } from "react-router-dom";

interface CardProps {
  imageSource?: string;
  title?: string;
  subTitle?: string;
  to: string;
}

const StyledCard = styled(NavLink)`
  border: none;
  text-decoration: none;
  cursor: pointer;

  width: 300px;
  min-height: 200px;
  border-radius: 10px;
  padding: 30px 0;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  background-color: var(--gray-1);

  transition: all 200ms ease-out;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--gray-3);

    & img {
      transform: scale(1.1);
    }
  }
`;

const ImageHolder = styled.div`
  width: 200px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 200px;
  transition: all 200ms ease-in;
`;

const Titles = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 200px;
`;

const ImagePlaceholder = styled.div`
  width: 200px;
  height: 300px;
`;

export const Card: React.FC<CardProps> = ({
  imageSource = "",
  title = "",
  subTitle = "",
  to,
}) => {
  return (
    <StyledCard to={to}>
      <ImageHolder>
        {imageSource ? (
          <StyledImage src={imageSource} alt={title} />
        ) : (
          <ImagePlaceholder />
        )}
      </ImageHolder>

      <Titles>
        <Heading as="h1" type="primary">
          {title}
        </Heading>
        <Heading as="h2" type="secondary">
          {subTitle}
        </Heading>
      </Titles>
    </StyledCard>
  );
};

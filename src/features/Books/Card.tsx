import React from "react";
import styled from "styled-components";
import { Heading } from "../../utils/Heading";

interface CardProps {
  imageSource?: string;
  title?: string;
  subTitle?: string;
  onClick?: () => void;
}

const StyledCard = styled.button`
  border: none;
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

export const Card: React.FC<CardProps> = ({
  imageSource = "",
  title = "",
  subTitle = "",
  onClick = undefined,
}) => {
  return (
    <StyledCard onClick={onClick}>
      <ImageHolder>
        <StyledImage src={imageSource} alt={title} />
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

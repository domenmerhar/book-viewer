import React from "react";
import styled from "styled-components";
import { Heading } from "../../utils/Heading";

interface CardProps {
  imageSource?: string;
  title?: string;
  subTitle?: string;
}

const StyledCard = styled.div`
  width: 270px;
  min-height: 200px;
  border-radius: 10px;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  background-color: var(--gray-1);
`;

const StyledImage = styled.img`
  height: 200px;
`;

export const Card: React.FC<CardProps> = ({
  imageSource = "",
  title = "",
  subTitle = "",
}) => {
  imageSource =
    "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg";

  return (
    <StyledCard>
      <StyledImage src={imageSource} alt={title} />

      <span>
        <Heading as="h1" type="primary">
          {title}
        </Heading>
        <Heading as="h2" type="secondary">
          {subTitle}
        </Heading>
      </span>
    </StyledCard>
  );
};

import React from "react";
import { Holder } from "../../utils/Holder";
import { Row } from "../../utils/Row";
import styled from "styled-components";
import { Heading } from "../../utils/Heading";
import { Column } from "../../utils/BookDetails";

interface CardSmallProps {
  image: string;
  title: string;
  author: string;
}

const Image = styled.img`
  width: 150px;
`;

const InfoWrapper = styled.div`
  margin-top: 4px;
`;

export const CardSmall: React.FC<CardSmallProps> = ({
  image,
  title,
  author,
}) => {
  return (
    <Holder width="415px">
      <Row gap="16px">
        <Image src={image} alt={title} />
        <InfoWrapper>
          <Column gap="8px">
            <Heading type="primary">{title}</Heading>
            <Heading type="secondary">{author}</Heading>
          </Column>
        </InfoWrapper>
      </Row>
    </Holder>
  );
};

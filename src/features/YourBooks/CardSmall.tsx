import React from "react";
import { Holder } from "../../utils/Holder";
import { Row } from "../../utils/Row";
import styled from "styled-components";
import { Heading } from "../../utils/Heading";

interface CardSmallProps {
  image: string;
  title: string;
  author: string;
}

const Image = styled.img`
  width: 150px;
`;

export const CardSmall: React.FC<CardSmallProps> = ({
  image,
  title,
  author,
}) => {
  return (
    <Holder width="415px">
      <Row>
        <Image src={image} alt={title} />
        <Heading type="primary">{title}</Heading>
        <Heading type="secondary">{author}</Heading>
      </Row>
    </Holder>
  );
};

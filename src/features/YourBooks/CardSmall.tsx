import React from "react";
import { Holder } from "../../utils/Holder";
import { Row } from "../../utils/Row";
import styled from "styled-components";
import { Heading } from "../../utils/Heading";
import { Column } from "../../utils/BookDetails";
import ExpandingList from "../../utils/ExpandingList";
import { ButtonSquare } from "../../utils/ButtonSquare";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { DropDownList } from "./DropDownList";
import { NavLink } from "react-router-dom";
import { shortenString } from "../../utils/shortenString";
import { TITLE_LENGTH } from "../../api/config";

interface CardSmallProps {
  id: number;
  image: string | null | undefined;
  title: string;
  author: string;
}

const Image = styled.img`
  width: 150px;
  max-height: 300px;

  transition: all 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const InfoWrapper = styled.div`
  margin-top: 4px;
`;

export const CardSmall: React.FC<CardSmallProps> = ({
  id,
  image,
  title,
  author,
}) => {
  return (
    <ExpandingList>
      <Holder width="415px">
        <Row gap="16px">
          <NavLink to={`/books/${id}&author=${author}`}>
            <Image src={image ? image : "/no-image.png"} alt={title} />
          </NavLink>
          <InfoWrapper>
            <Column gap="8px">
              <Heading type="primary">
                {shortenString(title, TITLE_LENGTH)}
              </Heading>
              <Heading type="secondary">{author}</Heading>
            </Column>
          </InfoWrapper>

          <ExpandingList.Button>
            <ButtonSquare>
              <HiOutlineDotsVertical size={24} />
            </ButtonSquare>
          </ExpandingList.Button>

          <ExpandingList.List>
            <DropDownList id={id} />
          </ExpandingList.List>
        </Row>
      </Holder>
    </ExpandingList>
  );
};

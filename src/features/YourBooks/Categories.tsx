import React from "react";
import { Row } from "../../utils/Row";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: var(--gray-3);
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  color: var(--black);
  font-size: 14px;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 200ms;

  &:disabled {
    background-color: var(--blue-5);
    color: var(--white);

    &:hover {
      cursor: not-allowed;
    }
  }
`;

interface CategoryProps {
  categories: string[];
}

export const Categories: React.FC<CategoryProps> = ({ categories }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (categoryName: string) => {
    setSearchParams({ category: categoryName });
  };

  const currentCategory = searchParams.get("category") || categories[0];

  return (
    <Row gap="8px">
      {categories.map((categoryItem) => {
        return (
          <Button
            key={categoryItem}
            onClick={() => handleClick(categoryItem)}
            disabled={currentCategory === categoryItem}
          >
            {categoryItem[0].toUpperCase() + categoryItem.slice(1)}
          </Button>
        );
      })}
    </Row>
  );
};

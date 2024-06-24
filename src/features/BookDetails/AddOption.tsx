import React from "react";
import styled from "styled-components";

interface AddOptionProps {
  collection: string;
}

const Option = styled.option`
  background-color: var(--gray-1);
  color: var(--black);
`;

export const AddOption: React.FC<AddOptionProps> = ({ collection }) => {
  const optionText = collection[0].toUpperCase() + collection.slice(1);
  return <Option value={collection}>{optionText}</Option>;
};

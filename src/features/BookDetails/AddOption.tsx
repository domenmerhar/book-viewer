import React from "react";
import styled from "styled-components";

interface AddOptionProps {
  value: string;
  text?: string;
}

const Option = styled.option`
  background-color: var(--gray-1);
  color: var(--black);
`;

export const AddOption: React.FC<AddOptionProps> = ({ value, text }) => {
  const optionText = value[0].toUpperCase() + value.slice(1);

  return <Option value={value}>{text ? text : optionText}</Option>;
};

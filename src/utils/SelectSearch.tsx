import React from "react";
import { AddOption } from "../features/BookDetails/AddOption";
import styled from "styled-components";

interface Options {
  value: string;
  text?: string;
}

interface SelectSearchParams {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  values: Options[];
  defaultValue: string;
}

const Select = styled.select`
  background-color: var(--gray-3);
  color: var(--black);
  border: none;
  padding: 4px 8px;
  border-radius: 1000px;

  margin-top: 2px;
`;

export const SelectSearch: React.FC<SelectSearchParams> = ({
  onChange,
  values,
  defaultValue,
}) => {
  return (
    <Select onChange={onChange} defaultValue={defaultValue}>
      {values.map(({ value, text }) => (
        <AddOption key={value} value={value} text={text} />
      ))}
    </Select>
  );
};

import React from "react";
import { Row } from "./Row";
import { Heading } from "./Heading";
import { SelectSearch } from "./SelectSearch";

interface Options {
  value: string;
  text?: string;
}

interface SortSelectParams {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Options[];
  defaultValue: string;
}

export const SortSelect: React.FC<SortSelectParams> = ({
  onChange,
  options,
  defaultValue,
}) => {
  return (
    <Row gap="16px" align="center">
      <Heading type="secondary">Sort by: </Heading>
      <SelectSearch
        defaultValue={defaultValue}
        values={options}
        onChange={onChange}
      />
    </Row>
  );
};

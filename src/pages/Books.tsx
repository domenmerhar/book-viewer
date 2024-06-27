import { useSearchParams } from "react-router-dom";
import { SortSelect } from "../utils/SortSelect";
import { BookList } from "../features/Books/BookList";
import { Row } from "../utils/Row";
import styled from "styled-components";

interface Option {
  value: string;
  text?: string;
}

const options: Option[] = [
  { value: "popular", text: "Most popular" },
  { value: "ascending", text: "ID (ascending)" },
  { value: "descending", text: "ID (descending)" },
];

const SelectHolder = styled.div`
  margin-bottom: 24px;
`;

export const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValue = searchParams.get("sort") || "Most popular";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...params, sort: e.target.value });
  };

  return (
    <>
      <SelectHolder>
        <Row justifycontent="flex-end">
          <SortSelect
            defaultValue={defaultValue}
            onChange={handleChange}
            options={options}
          />
        </Row>
      </SelectHolder>
      <BookList />
    </>
  );
};

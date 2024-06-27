import { Row } from "../../utils/Row";
import { Categories } from "./Categories";
import { useSearchParams } from "react-router-dom";
import { sortType } from "../../utils/sortBooks";
import { SortSelect } from "../../utils/SortSelect";

const categories = ["wishlist", "reading", "finished"];

interface Options {
  value: string;
  text?: string;
}

const options: Options[] = [
  { value: "added (oldest first)" },
  { value: "added (newest first)" },
  { value: "oldest" },
  { value: "youngest" },
  { value: "title" },
  { value: "author" },
];

export const SortFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort: sortType = (searchParams.get("sort") as sortType) || options[0];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...params, sort: e.target.value });
  };

  return (
    <Row justifycontent="space-between">
      <Categories categories={categories} />

      <SortSelect
        defaultValue={sort}
        options={options}
        onChange={handleChange}
      />
    </Row>
  );
};

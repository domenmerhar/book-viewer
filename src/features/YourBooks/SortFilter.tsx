import { Row } from "../../utils/Row";
import { Categories } from "./Categories";
import { Heading } from "../../utils/Heading";
import { SelectSearch } from "../../utils/SelectSearch";
import { useSearchParams } from "react-router-dom";
import { sortType } from "../../utils/sortBooks";

const categories = ["wishlist", "reading", "finished"];

const options = [
  "added (oldest first)",
  "added (newest first)",
  "oldest",
  "youngest",
  "title",
  "author",
];

export const SortFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort: sortType = (searchParams.get("sort") as sortType) || options[0];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...params, sort: e.target.value });
  };

  return (
    <Row justifyContent="space-between">
      <Categories categories={categories} />

      <Row gap="16px" alignItems="center">
        <Heading type="secondary">Sort by: </Heading>
        <SelectSearch
          defaultValue={sort}
          values={options}
          onChange={handleChange}
        />
      </Row>
    </Row>
  );
};

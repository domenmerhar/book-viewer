import { SortFilter } from "../features/YourBooks/SortFilter";
import { YourBooksList } from "../features/YourBooks/YourBooksList";

export const YourBooks = () => {
  return (
    <>
      <SortFilter />
      <YourBooksList />
    </>
  );
};

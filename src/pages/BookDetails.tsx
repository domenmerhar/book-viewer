import { useBook } from "../hooks/useBook";
import { SpinnerBig } from "../utils/SpinnerBig";

export const BookDetails = () => {
  const { book, error, isLoading } = useBook();

  if (isLoading) return <SpinnerBig loading={isLoading} />;

  console.log(book);

  return <div>BookDetails</div>;
};

import toast from "react-hot-toast";
import { useBook } from "../hooks/useBook";
import { SpinnerBig } from "../utils/SpinnerBig";
import { HeadingGradient } from "../utils/HeadingGradient";

export const BookDetails = () => {
  const { book, error, isLoading } = useBook();

  if (isLoading) return <SpinnerBig loading={isLoading} />;

  if (error) return toast.error("An error occurred. Please try again later.");

  console.log(book);

  return <HeadingGradient>{book.title}</HeadingGradient>;
};

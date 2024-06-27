import { ErrorBoundary } from "react-error-boundary";
import { SortFilter } from "../features/YourBooks/SortFilter";
import { YourBooksList } from "../features/YourBooks/YourBooksList";
import { ErrorFallback } from "../utils/ErrorFallback";

export const YourBooks = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SortFilter />
        <YourBooksList />
      </ErrorBoundary>
    </>
  );
};

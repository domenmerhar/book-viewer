import toast from "react-hot-toast";
import { useBook } from "../hooks/useBook";
import { SpinnerBig } from "../utils/SpinnerBig";
import { HeadingGradient } from "../utils/HeadingGradient";
import styled from "styled-components";
import { Holder } from "../utils/Holder";
import { BookInfoCard } from "../features/BookDetails/BookInfoCard";
import { Row } from "../utils/Row";
import { useParams } from "react-router-dom";
import { bookLocationType, useYourBooks } from "../hooks/useYourBooks";
import { Heading } from "../utils/Heading";
import { BookList } from "../features/Books/BookList";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../utils/ErrorFallback";

interface StatusTagProps {
  type: "wishlist" | "reading" | "finished";
}

const StatusTag = styled.span<StatusTagProps>`
  ${(props) => props.type === "wishlist" && "background: var(--blue-5);"}
  ${(props) => props.type === "reading" && "background: var(--yellow-4);"}
  ${(props) => props.type === "finished" && "background: var(--blue-3);"}

  color: var(--white);
  font-size: 14px;
  letter-spacing: 4px;
  padding: 12px 16px;
  border-radius: 1000px;
  max-height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-weight: 800;
`;

const Image = styled.img`
  width: 300px;
  max-width: 400px;
`;

const TagHolder = styled.div`
  padding-top: 12px;
`;

const HeadingHolder = styled.div`
  width: 70%;
`;

const AuthorHolder = styled.div`
  margin: 48px 0 16px 0;
`;

const localBookStatuses = ["wishlist", "reading", "finished"];

export const BookDetails = () => {
  const { book, error, isLoading } = useBook();
  const { id } = useParams<{ id: string }>();

  const idString = id?.split("&")[0];
  const author = id?.split("=")[1].split(",").join("");

  const { getBook } = useYourBooks();
  const localBook = getBook(idString!);

  if (error) return toast.error("An error occurred. Please try again later.");

  if (isLoading) return <SpinnerBig loading={isLoading} />;

  if ((book as { detail?: string })?.detail)
    return <Heading type="primary">No book found</Heading>;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Row gap="16px" justifycontent="space-between">
        <HeadingHolder>
          <HeadingGradient>{book?.title}</HeadingGradient>
        </HeadingHolder>

        <TagHolder>
          <Row gap="8px">
            {localBookStatuses.map(
              (status) =>
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (localBook as any)?.[status] && (
                  <StatusTag type={status as bookLocationType} key={status}>
                    {status}
                  </StatusTag>
                )
            )}
          </Row>
        </TagHolder>
      </Row>
      <Row gap="64px" justifycontent="space-around">
        <Holder>
          <Image
            src={
              book?.formats["image/jpeg"]
                ? book?.formats["image/jpeg"]
                : "/no-image.png"
            }
            alt={book?.title}
          />
        </Holder>

        <BookInfoCard book={book} />
      </Row>

      <AuthorHolder>
        <Heading type="primary">More from {author}</Heading>
      </AuthorHolder>

      <BookList />
    </ErrorBoundary>
  );
};

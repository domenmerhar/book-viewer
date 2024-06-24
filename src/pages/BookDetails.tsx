import toast from "react-hot-toast";
import { useBook } from "../hooks/useBook";
import { SpinnerBig } from "../utils/SpinnerBig";
import { HeadingGradient } from "../utils/HeadingGradient";
import styled from "styled-components";
import { Holder } from "../utils/Holder";
import { BookInfoCard } from "../features/BookDetails/BookInfoCard";
import { Row } from "../utils/Row";
import { useLocalBook } from "../hooks/useLocalBook";

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
  padding: 8px 8px;
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
`;

const localBookStatuses = ["wishlist", "reading", "finished"];

export const BookDetails = () => {
  const { book, error, isLoading } = useBook();
  const localBook = useLocalBook();

  console.log(localBook);

  if (error) return toast.error("An error occurred. Please try again later.");

  if (isLoading) return <SpinnerBig loading={isLoading} />;

  return (
    <>
      <Row>
        <HeadingGradient>{book?.title}</HeadingGradient>
        {localBookStatuses.map(
          (status) =>
            localBook?.[status] && <StatusTag type={status}>{status}</StatusTag>
        )}
      </Row>
      <Row gap="64px" justifyContent="space-around">
        <Holder>
          <Image src={book?.formats["image/jpeg"]} alt={book?.title} />
        </Holder>

        <BookInfoCard book={book} />
      </Row>
    </>
  );
};

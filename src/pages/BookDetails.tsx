import toast from "react-hot-toast";
import { useBook } from "../hooks/useBook";
import { SpinnerBig } from "../utils/SpinnerBig";
import { HeadingGradient } from "../utils/HeadingGradient";
import styled from "styled-components";
import { Holder } from "../utils/Holder";
import { BookInfoCard } from "../features/BookDetails/BookInfoCard";
import { Row } from "../utils/Row";

interface StatusTagProps {
  type: "wishlist" | "reading" | "finished";
}

const StatusTag = styled.span<StatusTagProps>`
  ${(props) => props.type === "wishlist" && "background: var(--blue-5);"}
  ${(props) => props.type === "reading" && "background: var(--blue-5);"}
  ${(props) => props.type === "finished" && "background: var(--blue-5);"}

  color: var(--white);
  font-size: 12px;
  letter-spacing: 3px;
  padding: 8px 8px;
  border-radius: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-weight: 800;
`;

const Image = styled.img`
  width: 300px;
`;

export const BookDetails = () => {
  const { book, error, isLoading } = useBook();

  if (error) return toast.error("An error occurred. Please try again later.");

  if (isLoading) return <SpinnerBig loading={isLoading} />;

  return (
    <>
      <Row>
        <HeadingGradient>{book?.title}</HeadingGradient>
        <StatusTag type="wishlist">Wishlist</StatusTag>
        <StatusTag type="reading">Reading</StatusTag>
        <StatusTag type="finished">Finished</StatusTag>
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

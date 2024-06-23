import toast from "react-hot-toast";
import { useBook } from "../hooks/useBook";
import { SpinnerBig } from "../utils/SpinnerBig";
import { HeadingGradient } from "../utils/HeadingGradient";
import styled from "styled-components";
import { Holder } from "../utils/Holder";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  width: 300px;
`;

export const BookDetails = () => {
  const { book, error, isLoading } = useBook();

  if (error) return toast.error("An error occurred. Please try again later.");

  if (isLoading) return <SpinnerBig loading={isLoading} />;

  console.log(book);

  return (
    <>
      <HeadingGradient>{book?.title}</HeadingGradient>
      <Row>
        <Holder>
          <Image src={book?.formats["image/jpeg"]} alt={book?.title} />
        </Holder>

        <Holder width="370px">dummy</Holder>
      </Row>
    </>
  );
};

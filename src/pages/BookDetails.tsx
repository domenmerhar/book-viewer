import toast from "react-hot-toast";
import { useBook } from "../hooks/useBook";
import { SpinnerBig } from "../utils/SpinnerBig";
import { HeadingGradient } from "../utils/HeadingGradient";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

interface HolderProps {
  width?: string;
  height?: string;
}

const Holder = styled.div<HolderProps>`
  ${(props) => props.width && `width: ${props.width}`}
  ${(props) => props.height && `width: ${props.height}`}


  padding: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-1);
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
      <Row>
        <div>
          <HeadingGradient>{book?.title}</HeadingGradient>
          <Holder>
            <Image src={book?.formats["image/jpeg"]} alt={book?.title} />
          </Holder>
        </div>
      </Row>
    </>
  );
};

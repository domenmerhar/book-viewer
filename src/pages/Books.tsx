import styled from "styled-components";
import { BookList } from "../features/Books/BookList";

const StyledResults = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--gray-2);
`;

export const Books = () => {
  return (
    <StyledResults>
      <BookList />
    </StyledResults>
  );
};

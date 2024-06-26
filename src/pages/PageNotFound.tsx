import styled from "styled-components";
import { Heading } from "../utils/Heading";
import { Column } from "../utils/BookDetails";

const StyledPageNotFound = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const PageNotFound = () => {
  return (
    <StyledPageNotFound>
      <Column>
        <Heading type="primary" as="h1">
          Page not found
        </Heading>
        <Heading type="secondary" as="h2">
          Please check if you have entered the correct URL.
        </Heading>
      </Column>
    </StyledPageNotFound>
  );
};

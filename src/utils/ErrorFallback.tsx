import styled from "styled-components";

const StyledError = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorFallback = () => {
  return <StyledError>Something went wrong!</StyledError>;
};

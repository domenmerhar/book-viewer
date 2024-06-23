import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const StyledResults = styled.div`
  min-width: 100vh;
  min-height: 100vh;

  max-width: 100%;
  max-height: 100%;

  background-color: var(--gray-2);
`;

export const Layout = () => {
  return (
    <>
      <Navbar />
      <StyledResults>
        <Outlet />
      </StyledResults>
    </>
  );
};

import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const MainDiv = styled.div`
  min-width: 100vh;
  min-height: 100vh;

  max-width: 100%;
  max-height: 100%;

  background-color: var(--gray-2);
  padding-top: 80px;

  margin: 0 auto;
`;

const PageContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Layout = () => {
  return (
    <>
      <Navbar />

      <MainDiv>
        <PageContent>
          <Outlet />
        </PageContent>
      </MainDiv>
    </>
  );
};

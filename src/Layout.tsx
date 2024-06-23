import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  background-color: var(--blue-3);

  display: flex;
  justify-content: space-between;
`;

export const Layout = () => {
  return (
    <>
      <StyledNavbar>
        <p>BookViewer</p>
        <div>
          <input type="text" placeholder="Book title" />
          <input type="text" placeholder="Author" />
        </div>

        <p>icon</p>
      </StyledNavbar>
      <Outlet />
    </>
  );
};

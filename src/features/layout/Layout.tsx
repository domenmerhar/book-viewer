import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../utils/Logo";
import { HiArchive } from "react-icons/hi";

const StyledNavbar = styled.nav`
  background-color: var(--blue-3);
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  padding: 0 20px;
`;

export const Layout = () => {
  return (
    <>
      <StyledNavbar>
        <Logo />
        <div>
          <input type="text" placeholder="Book title" />
          <input type="text" placeholder="Author" />
        </div>

        <HiArchive size={"48px"} fill="white" />
      </StyledNavbar>
      <Outlet />
    </>
  );
};

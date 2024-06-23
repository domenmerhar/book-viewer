import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../utils/Logo";
import { HiArchive } from "react-icons/hi";
import { SearchBar } from "./SearchBar";

const StyledNavbar = styled.nav`
  background-color: var(--blue-3);
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  padding: 0 20px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  & * {
    transition: color 200ms ease-in;
    transition: fill 200ms ease-in;
  }

  &.active * {
    color: var(--gray-3) !important;
    fill: var(--gray-3);
  }

  & :hover {
    color: var(--gray-3);
    fill: var(--gray-3);
  }
`;

export const Layout = () => {
  return (
    <>
      <StyledNavbar>
        <StyledNavLink to="/books">
          <Logo />
        </StyledNavLink>

        <SearchBar />

        <StyledNavLink to="/your-books">
          <HiArchive size={"48px"} fill="white" />
        </StyledNavLink>
      </StyledNavbar>
      <Outlet />
    </>
  );
};

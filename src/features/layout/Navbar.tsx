import { Logo } from "../../utils/Logo";
import { HiArchive } from "react-icons/hi";
import { SearchBar } from "./SearchBar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavbar = styled.nav`
  background-color: var(--blue-3);
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  padding: 0 20px;
  position: fixed;
  width: 1160px;
  z-index: 1000;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  & * {
    transition: all 200ms ease-in;
    transition: all 200ms ease-in;
  }

  &.active * {
    color: var(--gray-3) !important;
    fill: var(--gray-3);
  }

  & > :hover {
    transform: scale(1.1);

    color: var(--gray-3);
    fill: var(--gray-3);
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavLink to="/books">
        <Logo />
      </StyledNavLink>

      <SearchBar />

      <StyledNavLink to="/your-books">
        <HiArchive size={"48px"} fill="white" />
      </StyledNavLink>
    </StyledNavbar>
  );
};

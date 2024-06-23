import styled, { css } from "styled-components";

interface StyledInputProps {
  styleType: "primary" | "secondary";
}

const StyledSearchBar = styled.div`
  & > * {
    border-radius: 100000px;
  }
`;

const StyledInput = styled.input<StyledInputProps>`
  border: none;
  padding: 6px;
  padding-left: 12px;

  ${({ styleType }) =>
    styleType === "primary" &&
    css`
      background-color: white;
      max-width: 300px;
    `};

  ${({ styleType }) =>
    styleType === "secondary" &&
    css`
      transform: translateX(-20px);
      background-color: var(--gray-3);
      max-width: 200px;
    `};

  &:focus {
    outline: 2px solid var(--yellow-4);
  }
`;

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledInput styleType="primary" type="text" placeholder="Book title" />
      <StyledInput styleType="secondary" type="text" placeholder="Author" />
    </StyledSearchBar>
  );
};

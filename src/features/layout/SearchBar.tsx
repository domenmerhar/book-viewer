import { HiSearch } from "react-icons/hi";
import styled, { css } from "styled-components";

interface StyledInputProps {
  styleType: "primary" | "secondary";
}

const Form = styled.form`
  display: flex;
  align-items: center;

  & > * {
    border-radius: 100000px;
    height: 30px;
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
      min-width: 200px;
      max-width: 300px;
    `};

  ${({ styleType }) =>
    styleType === "secondary" &&
    css`
      transform: translateX(-25px);
      background-color: var(--gray-3);
      min-width: 150px;
      max-width: 200px;
    `};

  &:focus {
    outline: 2px solid var(--yellow-4);
  }
`;

const Button = styled.button`
  width: 70px;
  background-color: var(--gray-5);
  border: none;
  transform: translateX(-45px);

  transition: all 300ms;

  &:hover {
    & > * {
      transition: all 300ms;
      color: white;
    }
  }
`;

export const SearchBar = () => {
  return (
    <Form>
      <StyledInput styleType="primary" type="text" placeholder="Book title" />
      <StyledInput styleType="secondary" type="text" placeholder="Author" />
      <Button>
        <HiSearch size="24px" />
      </Button>
    </Form>
  );
};

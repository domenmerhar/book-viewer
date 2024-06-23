import { useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

interface StyledInputProps {
  styleType: "primary" | "secondary";
}

const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;

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

const Error = styled.p`
  position: absolute;
  bottom: -30px;
  left: 10px;
  font-size: 13px;

  color: var(--red);
  transition: all 200ms;

  opacity: 0;
  transform: translateY(-10px);

  &.visible {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const SearchBar = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const ref = useRef<HTMLParagraphElement>(null);

  const [, setSearchParams] = useSearchParams();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title && !author) return ref.current?.classList.add("visible");

    const searchParams = { ...(title && { title }), ...(author && { author }) };

    setSearchParams(searchParams);
  }

  return (
    <Form>
      <StyledInput
        styleType="primary"
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => {
          ref.current?.classList.remove("visible");
          setTitle(e.target.value);
        }}
      />

      <StyledInput
        styleType="secondary"
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => {
          ref.current?.classList.remove("visible");
          setAuthor(e.target.value);
        }}
      />

      <Button onClick={handleSubmit}>
        <HiSearch size="24px" />
      </Button>

      <Error ref={ref}>Please insert a book title or an author name.</Error>
    </Form>
  );
};

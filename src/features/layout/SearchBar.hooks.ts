import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearchBar = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const navigate = useNavigate();

  const ref = useRef<HTMLParagraphElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title && !author) return ref.current?.classList.add("visible");

    const searchParams = {
      ...(title && { title }),
      ...(author && { author }),
    };

    navigate({
      pathname: "/books",
      search: `?${new URLSearchParams(searchParams).toString()}`,
    });
  }

  return {
    title,
    setTitle,
    author,
    setAuthor,
    ref,
    handleSubmit,
  };
};

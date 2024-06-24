import styled from "styled-components";
import { Book } from "../../Interface/Book";
import { Column } from "../../utils/BookDetails";
import { Heading } from "../../utils/Heading";
import { Holder } from "../../utils/Holder";
import { InfoParagraph } from "./InfoParagraph";
import { HiDownload } from "react-icons/hi";
import { Row } from "../../utils/Row";
import { Link, useSearchParams } from "react-router-dom";
import {
  LocalBook,
  useLocalStorageState,
} from "../../hooks/useLocalStorageState";
import toast from "react-hot-toast";
import { SelectSearch } from "../../utils/SelectSearch";

interface BookInfoCardProps {
  book: Book | undefined;
}

const ButtonGradient = styled.button`
  background: linear-gradient(55deg, var(--blue-5), var(--blue-8));
  border: none;
  border-radius: 1000px;
  padding: 0.75em 1.25em;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: var(--white);

  transition: all 200ms;

  & * {
    color: var(--white);
    transition: transform 200ms;
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

type addParam = "wishlist" | "reading" | "finished";

export const BookInfoCard: React.FC<BookInfoCardProps> = ({ book }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [savedBooks, setSavedBooks] = useLocalStorageState([], "savedBooks");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ add: e.target.value });

    if (
      savedBooks.find(
        (curr: LocalBook) =>
          curr.id === book?.id && curr[e.target.value as addParam] === true
      )
    )
      toast.error(`Book already exists in ${e.target.value}.`);
  };

  const handleClick = () => {
    const location: addParam = searchParams.get("add") || "wishlist";

    setSavedBooks((prev: LocalBook[]) => {
      const searchedBook = prev.find(
        (curr: LocalBook) => curr.id === Number(book?.id)
      );

      if (searchedBook && searchedBook[location] === true) {
        toast.error(`Book already exists in ${location}.`);
        return [...prev];
      }

      toast.success(`Book added to ${location}`);

      if (searchedBook) {
        if (location === "wishlist")
          return prev.map((curr: LocalBook) => {
            if (curr.id !== searchedBook!.id) return curr;
            return { ...curr, wishlist: true };
          });

        searchedBook.reading = searchedBook.finished = false;

        return prev.map((curr: LocalBook) => {
          if (curr.id === searchedBook?.id) {
            curr.reading = curr.finished = false;
            return (curr[location] = true);
          }

          return curr.id === searchedBook?.id
            ? { ...curr, [location]: true }
            : curr;
        });
      }

      const bookToSave: LocalBook = {
        id: book?.id,
        wishlist: false,
        reading: false,
        finished: false,
      };

      bookToSave[location] = true;

      return [...prev, bookToSave];
    });
  };

  return (
    <Holder
      justifyContent="space-between"
      alignItems="flex-start"
      isColumn={true}
    >
      <div>
        <Column gap="16px">
          <span>
            <InfoParagraph
              title="Written By"
              renderFn={() =>
                book?.authors.map((author) => (
                  <Heading
                    type="secondary"
                    key={author.name}
                    color="rgba(0, 0, 0, 0.75)"
                  >
                    {author.name}
                  </Heading>
                ))
              }
            />
          </span>

          <span>
            <InfoParagraph
              title="Themes"
              renderFn={() =>
                book?.subjects.map((subject) => {
                  const theme = subject.split("--").join(" ").split("(")[0];

                  return (
                    <Heading type="secondary" key={subject + Date.now()}>
                      {theme}
                    </Heading>
                  );
                })
              }
            />
          </span>

          <span>
            <InfoParagraph
              title="Languages"
              renderFn={() =>
                book?.languages.map((language) => (
                  <Heading type="secondary" key={language}>
                    {language}
                  </Heading>
                ))
              }
            />
          </span>
        </Column>
      </div>

      <div style={{ marginTop: "48px" }}>
        <Row gap="12px">
          <Link to={book!.formats["application/epub+zip"]}>
            <ButtonGradient>
              <Flex>
                <HiDownload size={24} />
                Download
              </Flex>
            </ButtonGradient>
          </Link>

          <ButtonGradient onClick={handleClick}>Add to</ButtonGradient>
          <SelectSearch
            onChange={handleChange}
            values={["wishlist", "reading", "finished"]}
            defaultValue={searchParams.get("add") || "wishlist"}
          />
        </Row>
      </div>
    </Holder>
  );
};

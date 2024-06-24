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
import { AddOption } from "./AddOption";

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

const Select = styled.select`
  background-color: var(--gray-1);
  color: var(--black);
  border: none;
  padding: 4px 8px;
  border-radius: 1000px;

  margin-top: 2px;
`;

export const BookInfoCard: React.FC<BookInfoCardProps> = ({ book }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [savedBooks, setSavedBooks] = useLocalStorageState([], "savedBooks");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ add: e.target.value });
  };

  const handleClick = () => {
    const location = searchParams.get("add") || "wishlist";
    const bookToSave = { id: book?.id, collection: location };

    setSavedBooks((prev: LocalBook[]) => {
      if (
        prev.find(
          (book) =>
            book.id === bookToSave.id &&
            book.collection === bookToSave.collection
        )
      ) {
        toast.error(`Book already exists in ${location}`);
        return [...prev];
      }

      toast.success(`Book added to ${location}`);
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
          <ButtonGradient as={Link} to={book?.formats["application/epub+zip"]}>
            <Flex>
              <HiDownload size={24} />
              Download
            </Flex>
          </ButtonGradient>

          <ButtonGradient onClick={handleClick}>
            <Flex>
              Add to
              <Select onChange={handleChange}>
                {/* {getSavedBook("wishlist") && (
                  <Option value="wishlist">Wishlist</Option>
                )}
                <Option value="reading">Reading</Option>
                <Option value="finished">Finished</Option> */}
                <AddOption
                  savedBooks={savedBooks}
                  collection="wishlist"
                  bookId={book?.id}
                />

                <AddOption
                  savedBooks={savedBooks}
                  collection="reaing"
                  bookId={book?.id}
                />

                <AddOption
                  savedBooks={savedBooks}
                  collection=""
                  bookId={book?.id}
                />
              </Select>
            </Flex>
          </ButtonGradient>
        </Row>
      </div>
    </Holder>
  );
};

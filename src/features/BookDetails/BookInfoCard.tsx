import styled from "styled-components";
import { Book } from "../../Interface/book";
import { Column } from "../../utils/BookDetails";
import { Heading } from "../../utils/Heading";
import { Holder } from "../../utils/Holder";
import { InfoParagraph } from "./InfoParagraph";
import { HiDownload } from "react-icons/hi";
import { Row } from "../../utils/Row";
import { Link } from "react-router-dom";
import { SelectSearch } from "../../utils/SelectSearch";
import { useBookInfoCard } from "./BookInfoCard.hooks";

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

const languageNames = new Intl.DisplayNames(["en"], {
  type: "language",
});

export const BookInfoCard: React.FC<BookInfoCardProps> = ({ book }) => {
  const { handleChange, handleClick, defaultValue } = useBookInfoCard({ book });

  return (
    <Holder justifycontent="space-between" align="flex-start" isColumn={true}>
      <div>
        <Column gap="16px">
          <span>
            <InfoParagraph
              title="Written By"
              renderFn={() =>
                book?.authors?.map((author) => (
                  <Heading
                    type="secondary"
                    key={author?.name}
                    color="rgba(0, 0, 0, 0.75)"
                  >
                    {author?.name}
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
                    {languageNames.of(language)}
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
            values={[
              { value: "wishlist" },
              { value: "reading" },
              { value: "finished" },
            ]}
            defaultValue={defaultValue}
          />
        </Row>
      </div>
    </Holder>
  );
};

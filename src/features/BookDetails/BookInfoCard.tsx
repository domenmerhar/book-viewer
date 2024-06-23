import styled from "styled-components";
import { Book } from "../../Interface/Book";
import { Column } from "../../utils/BookDetails";
import { Heading } from "../../utils/Heading";
import { Holder } from "../../utils/Holder";
import { InfoParagraph } from "./InfoParagraph";
import { HiDownload } from "react-icons/hi";
import { Row } from "../../utils/Row";

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

  transition: all 200ms;

  & * {
    color: var(--white);
    transition: transform 200ms;
  }

  &:hover {
    transform: scale(1.1);
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

const Option = styled.option`
  background-color: var(--gray-1);
  color: var(--black);
`;

export const BookInfoCard: React.FC<BookInfoCardProps> = ({ book }) => {
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

      <Row gap="12px">
        <ButtonGradient>
          <Flex>
            <HiDownload size={24} />
            Download
          </Flex>
        </ButtonGradient>

        <ButtonGradient>
          <Flex>
            Add to
            <Select>
              <Option>Wishlist</Option>
              <Option>Reading</Option>
              <Option>Finished</Option>
            </Select>
          </Flex>
        </ButtonGradient>
      </Row>
    </Holder>
  );
};

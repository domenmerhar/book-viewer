import { Book } from "../../Interface/Book";
import { Column } from "../../utils/BookDetails";
import { Heading } from "../../utils/Heading";
import { Holder } from "../../utils/Holder";
import { InfoParagraph } from "./InfoParagraph";

interface BookInfoCardProps {
  book: Book | undefined;
}

export const BookInfoCard: React.FC<BookInfoCardProps> = ({ book }) => {
  return (
    <Holder width="370px" justifyContent="flex-start" alignItems="flex-start">
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
    </Holder>
  );
};

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
    <Holder width="370px">
      <Column>
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
      </Column>
    </Holder>
  );
};

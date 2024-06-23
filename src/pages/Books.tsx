import { useNavigate } from "react-router-dom";
import { books } from "../data";
import { Card } from "../features/Books/Card";
import { List } from "../utils/List";

export const Books = () => {
  const navigate = useNavigate();

  const render: () => React.ReactNode[] = () =>
    books.results.map((book) => (
      <li>
        <Card
          key={book.id}
          title={book.title}
          subTitle={book.authors[0].name}
          imageSource={book.formats["image/jpeg"]}
          onClick={() => navigate(`/books/${book.id}`)}
        />
      </li>
    ));

  return (
    <div>
      <List itemWidth={300} renderFn={render} />
    </div>
  );
};

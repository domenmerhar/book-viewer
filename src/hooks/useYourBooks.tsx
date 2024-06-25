import { createContext, useContext } from "react";
import { LocalBook, useLocalStorageState } from "./useLocalStorageState";
import toast from "react-hot-toast";

interface yourBooksContextType {
  savedBooks: LocalBook[];
  setSavedBooks: React.Dispatch<unknown>;
  addBook: (id: string, location: bookLocationType) => void;
  getBook: (id: string) => LocalBook | undefined;
  bookHasProperty: (id: string, location: bookLocationType) => boolean;
  removeBookCategory: (id: string, location: bookLocationType) => void;
}

interface yourBooksProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export type bookLocationType = "wishlist" | "reading" | "finished";

const yourBooksContext = createContext<yourBooksContextType>(
  {} as yourBooksContextType
);

export const YourBooksProvider: React.FC<yourBooksProviderProps> = ({
  children,
}) => {
  const [savedBooks, setSavedBooks] = useLocalStorageState([], "savedBooks");

  function addBook(id: string, location: bookLocationType) {
    setSavedBooks((prev: LocalBook[]) => {
      const searchedBook = prev.find(
        (curr: LocalBook) => curr.id === Number(id)
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
        searchedBook[location] = true;

        return prev.map((curr: LocalBook) => {
          if (curr.id !== searchedBook.id) return curr;
          return searchedBook;
        });
      }

      const bookToSave: LocalBook = {
        id: Number(id),
        wishlist: false,
        reading: false,
        finished: false,
      };

      bookToSave[location] = true;

      return [...prev, bookToSave];
    });
  }

  const getBook = (id: string) =>
    savedBooks.find((curr: LocalBook) => curr.id === Number(id));

  const bookHasProperty = (id: string, location: bookLocationType) =>
    savedBooks.find(
      (curr: LocalBook) => curr.id === Number(id) && curr[location] === true
    ) !== undefined;

  const removeBookCategory = (id: string, location: bookLocationType) => {
    setSavedBooks((prev: LocalBook[]) => {
      const searchedBook = prev.find(
        (curr: LocalBook) => curr.id === Number(id)
      );

      if (
        !searchedBook?.finished &&
        !searchedBook?.reading &&
        !searchedBook?.wishlist
      )
        return prev.filter((curr: LocalBook) => curr.id !== Number(id));

      searchedBook![location] = false;

      return prev.map((curr: LocalBook) => {
        if (curr.id !== searchedBook.id) return curr;
        return searchedBook;
      });
    });
  };

  return (
    <yourBooksContext.Provider
      value={{
        savedBooks,
        setSavedBooks,
        addBook,
        getBook,
        bookHasProperty,
        removeBookCategory,
      }}
    >
      {children}
    </yourBooksContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useYourBooks = () => {
  const context = useContext(yourBooksContext);

  if (!context) {
    throw new Error("useYourBooks must be used within a YourBooksProvider");
  }

  return context;
};

import { createContext, useContext } from "react";
import { LocalBook, useLocalStorageState } from "./useLocalStorageState";

interface yourBooksContextType {
  savedBooks: LocalBook[];
  setSavedBooks: React.Dispatch<unknown>;
}

interface yourBooksProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const yourBooksContext = createContext<yourBooksContextType>({});

export const YourBooksProvider: React.FC<yourBooksProviderProps> = ({
  children,
}) => {
  const [savedBooks, setSavedBooks] = useLocalStorageState([], "savedBooks");

  return (
    <yourBooksContext.Provider value={{ savedBooks, setSavedBooks }}>
      {children}
    </yourBooksContext.Provider>
  );
};

export const useYourBooks = () => {
  const context = useContext(yourBooksContext);

  if (!context) {
    throw new Error("useYourBooks must be used within a YourBooksProvider");
  }

  return context;
};

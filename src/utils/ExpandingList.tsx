import React, {
  useState,
  createContext,
  useContext,
  cloneElement,
} from "react";

interface ChildrenProps {
  children: React.ReactNode[] | React.ReactNode;
}

interface ButtonProps {
  children: React.ReactNode;
}

interface ContextType {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const expandingListContext = createContext<ContextType>({});

export const ExpandingList = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <expandingListContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </expandingListContext.Provider>
  );
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  const { setIsOpen } = useContext(expandingListContext);

  const handleClick = () => setIsOpen!((prev: boolean) => !prev);

  return children
    ? cloneElement(children as React.ReactElement, {
        onClick: handleClick,
      })
    : null;
};

type listClickType = () => void;

const List: React.FC<ButtonProps> = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(expandingListContext);

  const listClick: listClickType = () => setIsOpen!(false);

  if (!isOpen) return null;

  return <>{cloneElement(children as React.ReactElement, { listClick })}</>;
};

ExpandingList.Button = Button;
ExpandingList.List = List;

export default ExpandingList;

import React, {
  useState,
  createContext,
  useContext,
  cloneElement,
} from "react";
import styled from "styled-components";

interface Coordinates {
  x: number;
  y: number;
}

interface ChildrenProps {
  children: React.ReactNode[] | React.ReactNode;
}

interface ButtonProps {
  children: React.ReactNode;
}

interface ContextType {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  position: Coordinates;
  setPosition: React.Dispatch<React.SetStateAction<Coordinates>>;
}

const expandingListContext = createContext<ContextType>({} as ContextType);

export const ExpandingList = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<Coordinates>({ x: 0, y: 0 });

  return (
    <expandingListContext.Provider
      value={{ isOpen, setIsOpen, position, setPosition }}
    >
      {children}
    </expandingListContext.Provider>
  );
};

const Div = styled.div<Coordinates>`
  position: fixed;

  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};
`;

const Button: React.FC<ButtonProps> = ({ children }) => {
  const { setIsOpen, setPosition } = useContext(expandingListContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = (e.target as Element)
      .closest("button")!
      .getBoundingClientRect();

    setPosition({
      x: e.screenX + 4,
      y: rect.y + rect.height / 2,
    });

    setIsOpen!((prev: boolean) => !prev);
  };

  return (
    <>
      {children
        ? cloneElement(children as React.ReactElement, {
            onClick: handleClick,
          })
        : null}
    </>
  );
};

export type listClickType = () => void;

const List: React.FC<ButtonProps> = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(expandingListContext);
  const { position } = useContext(expandingListContext);

  const listClick: listClickType = () => setIsOpen!(false);

  if (!isOpen) return null;

  return (
    <Div x={position.x} y={position.y}>
      {cloneElement(children as React.ReactElement, { listClick })}
    </Div>
  );
};

ExpandingList.Button = Button;
ExpandingList.List = List;

export default ExpandingList;

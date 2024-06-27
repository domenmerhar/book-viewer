import React, {
  useState,
  createContext,
  useContext,
  cloneElement,
  useEffect,
  useCallback,
  LegacyRef,
} from "react";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

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
  close: () => void;
}

const expandingListContext = createContext<ContextType>({} as ContextType);

export const ExpandingList = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<Coordinates>({ x: 0, y: 0 });

  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  useEffect(() => {
    document.addEventListener("scroll", close);

    return () => {
      document.removeEventListener("scroll", close);
    };
  }, [close]);

  return (
    <expandingListContext.Provider
      value={{ isOpen, setIsOpen, position, setPosition, close }}
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
      x: rect.x + rect.width / 2,
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
  const { isOpen, setIsOpen, close } = useContext(expandingListContext);
  const { position } = useContext(expandingListContext);

  const ref = useOutsideClick(close);

  const listClick: listClickType = () => setIsOpen!(false);

  if (!isOpen) return null;

  return (
    <Div x={position.x} y={position.y} ref={ref as LegacyRef<HTMLDivElement>}>
      {cloneElement(children as React.ReactElement, { listClick })}
    </Div>
  );
};

ExpandingList.Button = Button;
ExpandingList.List = List;

export default ExpandingList;

import styled from "styled-components";

interface HolderProps {
  width?: string;
  height?: string;
  justifycontent?: string;
  align?: string;
  isColumn?: boolean;
}

export const Holder = styled.div<HolderProps>`
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => `justify-content: ${props.justifycontent || "center"};`}
  ${(props) => `align-items: ${props.align || "center"};`}
  ${(props) => props.isColumn && `flex-direction: column;`}


  padding: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  margin-top: 30px;

  display: flex;
  background-color: var(--gray-1);
`;

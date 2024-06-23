import styled from "styled-components";

interface HolderProps {
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const Holder = styled.div<HolderProps>`
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => `justify-content: ${props.justifyContent || "center"};`}
  ${(props) => `align-items: ${props.alignItems || "center"};`}


  padding: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  margin-top: 30px;

  display: flex;
  background-color: var(--gray-1);
`;

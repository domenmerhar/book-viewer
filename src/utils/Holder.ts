import styled from "styled-components";

interface HolderProps {
  width?: string;
  height?: string;
}

export const Holder = styled.div<HolderProps>`
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}


  padding: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-1);
`;

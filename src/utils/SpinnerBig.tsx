import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

interface SpinnerBigProps {
  loading: boolean;
  size: number;
}

const StyledSpinnerBig = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 92vh;
  width: 100%;
`;

export const SpinnerBig: React.FC<SpinnerBigProps> = ({ loading, size }) => {
  return (
    <StyledSpinnerBig>
      <ClipLoader color="#339AF0" loading={loading} size={size} />
    </StyledSpinnerBig>
  );
};

import React from "react";
import { Heading } from "../../utils/Heading";

interface InfoParagraphProps {
  title: string;
  renderFn: () => React.ReactNode;
}

export const InfoParagraph: React.FC<InfoParagraphProps> = ({
  title,
  renderFn,
}) => {
  return (
    <>
      <Heading type="primary">{title}</Heading>
      {renderFn()}
    </>
  );
};

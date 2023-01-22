import React from "react";
import { Figure, FigureCaption, Image } from "./styled";

export const GifItem = ({ src, caption }) => {
  return (
    <Figure>
      <FigureCaption>{caption}</FigureCaption>
      <Image src={src} alt={caption} />
    </Figure>
  );
};

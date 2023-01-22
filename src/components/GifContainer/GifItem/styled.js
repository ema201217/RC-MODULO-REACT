import styled from "styled-components";

export const Figure = styled.figure`
  width: 120px;
  height: 120px;
  position: relative;
  margin: 0;
  padding: 0;
  border: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;
`;

export const FigureCaption = styled.figcaption`
  width: 100%;
  font-weight: bolder;
  color: #a0a0aa;
  text-align: center;
  font-size: 0.6rem;
  background-color: rgba(0, 0, 0, 0.8);
`;

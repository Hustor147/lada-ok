import React from "react";
import SlickGallery from "./SlickGallery";

const images = [
  "./images/foto1.jpeg",
  "./images/foto2.jpeg",
  "./images/foto3.jpeg",
  "./images/foto4.jpeg",
  "./images/foto5.jpeg",
];

const Ladislav = () => {
  return <SlickGallery images={images} />;
};

export default Ladislav;

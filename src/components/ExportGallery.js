import React, { Component } from "react";
import { render } from "react-dom";

import axios from "axios";
import "./ExportGallery.css";
import ReactstrapImageGallery from "./ReactstrapImageGallery";

const URL = "https://jsonplaceholder.typicode.com/photos";

class ExportGallery extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          albumId: 1,
          id: 1,
          title: "New Image",
          url: "./images/Foto1.jpeg",
        },
        {
          albumId: 1,
          id: 2,
          title: "New Image",
          url: "./images/Foto2.jpeg",
          thumbnailUrl: "./images/Foto2.jpeg",
        },
        {
          albumId: 1,
          id: 3,
          title: "New Image",
          url: "./images/Foto3.jpeg",
          thumbnailUrl: "./images/Foto3.jpeg",
        },
        {
          albumId: 1,
          id: 4,
          title: "New Image",
          url: "./images/Foto4.jpeg",
          thumbnailUrl: "./images/Foto4.jpeg",
        },
        {
          albumId: 1,
          id: 5,
          title: "New Image",
          url: "./images/Foto5.jpeg",
          thumbnailUrl: "./images/Foto5.jpeg",
        },
        {
          albumId: 1,
          id: 6,
          title: "New Image",
          url: "./images/Foto6.jpeg",
          thumbnailUrl: "./images/Foto6.jpeg",
        },
        {
          albumId: 1,
          id: 7,
          title: "New Image",
          url: "./images/Foto7.jpeg",
          thumbnailUrl: "./images/Foto7.jpeg",
        },
        {
          albumId: 1,
          id: 8,
          title: "New Image",
          url: "./images/Foto8.jpeg",
          thumbnailUrl: "./images/Foto8.jpeg",
        },
        {
          albumId: 1,
          id: 9,
          title: "New Image",
          url: "./images/Foto9.jpeg",
          thumbnailUrl: "./images/Foto9.jpeg",
        },
      ],
    };
  }

  // componentDidMount() {
  //   axios
  //     .get(URL)
  //     .then((res) => this.setState({ images: res.data.slice(0, 10) }));
  // }

  render() {
    const { images } = this.state;
    return (
      <ReactstrapImageGallery
        className="imagesGallery"
        images={images}
        limit={5}
      />
    );
  }
}

export default ExportGallery;

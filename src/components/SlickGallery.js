import React, { useState } from "react";
import Slider from "react-slick";

const SlickGallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    className: "slick-custom",
    customPaging: function (i) {
      return (
        <a>
          <img src={images[i]} alt="" />
        </a>
      );
    },
    onClick: (index) => {
      setSelectedImage(index);
      setShowModal(true);
    },
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} height={200} width={200} alt="" />
          </div>
        ))}
      </Slider>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <img src={images[selectedImage]} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default SlickGallery;

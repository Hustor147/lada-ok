import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./slick.css";
import "./slick-theme.css";
import "./Fotogalerie.css";

function Fotogalerie() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleNextClick = () => {
    sliderRef.current.slickNext();
    setSliderIndex(sliderIndex + 1);
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
    setSliderIndex(sliderIndex - 1);
  };

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // const customStyle = {
  //   content: {
  //     top: "50%",
  //     right: "20%",
  //     width: "50%",
  //     centered: "false",
  //   },
  //};

  return (
    <>
      <Slider
        ref={sliderRef}
        slidesToShow={3}
        slidesToScroll={1}
        afterChange={(index) => setSliderIndex(index)}
      >
        <div className="slickThumbnails" onClick={openModal}>
          <img id="foto" src="./images/foto1.jpeg" width={200} height={200} />
        </div>
        <div className="slickThumbnails">
          <img src="./images/foto2.jpeg" width={200} height={200} />
        </div>
        <div className="slickThumbnails">
          <img src="./images/foto3.jpeg" width={200} height={200} />
        </div>
        <div id="slickThumbnails">
          <img src="./images/foto4.jpeg" width={200} height={200} />
        </div>
        <div id="slickThumbnails">
          <img src="./images/foto5.jpeg" width={200} height={200} />
        </div>
        <div id="slickThumbnails">
          <img src="./images/foto6.jpeg" width={200} height={200} />
        </div>
        <div id="slickThumbnails">
          <img src="./images/foto7.jpeg" width={200} height={200} />
        </div>
        <div id="slickThumbnails">
          <img src="./images/foto8.jpeg" width={200} height={200} />
        </div>
        <div id="slickThumbnails">
          <img src="./images/foto9.jpeg" width={200} height={200} />
        </div>
      </Slider>
      <Modal
        className="ModalFoto"
        isOpen={isOpen}
        onRequestClose={closeModal}
        toggle={closeModal}
        centered={false}
      >
        <ModalHeader></ModalHeader>
        <ModalBody>
          <img src="./images/foto1.jpeg" />
        </ModalBody>
      </Modal>
      {/* <div>
        <button disabled={sliderIndex <= 0} onClick={handlePrevClick}>
          Prev
        </button>
        <button disabled={sliderIndex >= 12} onClick={handleNextClick}>
          Next
        </button>
      </div> */}
    </>
  );
}

export default Fotogalerie;

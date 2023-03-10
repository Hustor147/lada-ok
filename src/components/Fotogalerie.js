import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

function Fotogalerie() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleNextClick = () => {
    sliderRef.current.slickNext();
    setSliderIndex(sliderIndex + 4);
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
    setSliderIndex(sliderIndex - 4);
  };

  return (
    <>
      <Slider
        ref={sliderRef}
        slidesToShow={3}
        slidesToScroll={3}
        afterChange={(index) => setSliderIndex(index)}
      >
        <div id="center">
          <img src="./images/foto1.jpeg" width={200} height={200} />
        </div>
        <div id="center">
          <img src="./images/foto2.jpeg" width={200} height={200} />
        </div>
        <div>
          <img src="./images/foto3.jpeg" width={200} height={200} />
        </div>
        <div>
          <img src="./images/foto4.jpeg" width={200} height={200} />
        </div>
        <div>
          <img src="./images/foto5.jpeg" width={200} height={200} />
        </div>
        <div>
          <img src="./images/foto6.jpeg" width={200} height={200} />
        </div>
        <div>
          <img src="./images/foto7.jpeg" width={200} height={200} />
        </div>
        <div>
          <img src="./images/foto8.jpeg" width={200} height={200} />
        </div>
        <div>
          <img src="./images/foto9.jpeg" width={200} height={200} />
        </div>
      </Slider>
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

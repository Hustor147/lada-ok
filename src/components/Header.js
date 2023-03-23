import "./Header.css";
import { UncontrolledCarousel } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Header = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // const [isVisible, setIsVisible] = useState(true);
  // useEffect(() => {
  //   // po 3 sekundách skryjeme úvodní obrázek
  //   setTimeout(() => {
  //     setIsVisible(false);
  //   }, 2000);
  // }, []);

  // const style = {
  //   opacity: isVisible ? 1 : 0,
  //   transition: "opacity 1s ease-out",
  // };

  return (
    <>
      {/* <div className="hero-image" style={style}></div> */}
      {/* TADY JE LOGO */}
      <img
        className="logoStatic"
        src="./images/lgo.gif"
        width={300}
        height={300}
      ></img>
      {/* Mozna animovane logo <Logo/>*/}
      <div className="">
        <br></br>
        {/* PRAVA STRANA OD LOGA */}
        <div className="nadpisHlavicky">
          <hr className="cara"></hr>
          <h1 className="nadpisH1">
            JARM-SAT<span className="fialova"> digital </span>TV / IP
          </h1>
          <hr className="cara"></hr>
          <h3 className="obsah">Instalace = Servis = Modernizace</h3>
          <h2>Anténní / Satelitní / Kamerový</h2>
          <h2>
            DVB <span className="fialovaBack">T2</span> / DVB{" "}
            <span className="fialovaBack">S2</span> / IP AHD systém
          </h2>
        </div>
      </div>
      <br></br>
      {/* STRIDAJICI SE OBRAZKY */}
      <div className="slide">
        <UncontrolledCarousel
          items={[
            {
              //altText: 'Slide 1',
              //caption: 'Slide 1',
              key: 1,
              src: "https://picsum.photos/id/123/1200/300",
            },
            {
              //altText: 'Slide 2',
              //caption: 'Slide 2',
              key: 2,
              src: "https://picsum.photos/id/456/1200/300",
            },
            {
              //altText: 'Slide 3',
              //caption: 'Slide 3',
              key: 3,
              src: "https://picsum.photos/id/678/1200/300",
            },
          ]}
        ></UncontrolledCarousel>
        <br></br>
      </div>
      <div className="nav">
        <nav>
          <NavLink to="/" className="btn">
            O nás
          </NavLink>
          <NavLink to="Nabizime" className="btn">
            Nabízíme
          </NavLink>
          <NavLink to="Reference" className="btn">
            Reference
          </NavLink>
          <NavLink to="Kontakty" className="btn">
            Kontakty
          </NavLink>
          <NavLink to="Poptavka" className="btn">
            Poptávka
          </NavLink>
        </nav>
      </div>
      <br></br>
    </>
  );
};

export default Header;

import { useRef, useState } from "react";
import "./BackOnTop.css";

function BackOnTop() {
  // Ref pro získání přístupu k elementu tlačítka
  const scrollToTopBtnRef = useRef(null);

  // Funkce pro posun stránky nahoru
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [isVisible, setIsVisible] = useState(false);
  const style = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.75s ease-out",
  };

  // Funkce pro zobrazení nebo skrytí tlačítka
  const handleScroll = () => {
    const scrollToTopBtn = scrollToTopBtnRef.current;

    if (window.scrollY > 50) {
      scrollToTopBtn.style.display = "block";
      setIsVisible(true);
    } else {
      scrollToTopBtn.style.display = "none";
      setIsVisible(false);
    }
  };

  // Přidání event listeneru pro posun stránky a zobrazení/skrytí tlačítka
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="topClass">
      <a
        ref={scrollToTopBtnRef}
        style={style}
        className="topButton"
        onClick={scrollToTop}
      >
        <img src="./images/up.svg" width={60} height={60} />
        {/* Tady dopnit obrazek sipky nahoru */}
      </a>
    </div>
  );
}
export default BackOnTop;

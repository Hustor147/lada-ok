import "./Footer.css";
import BackOnTop from "./BackOnTop";
import { Button } from "reactstrap";

const Footer = () => {
  return (
    <>
      <div className="bgfooter">
        <a
          href="https://www.facebook.com/profile.php?id=100064170751198"
          target="_blank"
          className="faceBook"
        >
          <img src="./images/facebook.jpeg" width={40} height={40} />
        </a>

        <p className="obsahPaticky">
          Jarm-SAT© 2023 <br></br> LK147© 2023
        </p>
      </div>
    </>
  );
};

export default Footer;

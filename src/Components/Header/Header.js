import React from "react";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import "./Header.css";
import myPic from "../../Assets/myPicDarkBlue.jpg";

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Yosef Melamed</h1>
        <h5 className="text-light">Full Stack developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={myPic} alt="my profile" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

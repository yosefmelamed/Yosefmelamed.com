import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        YM
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/yosef-melamed/" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/yosefmelamed" target="blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Melamed Designs. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/yosef-melamed/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/yosefmelamed?tab=repositories" target="blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;

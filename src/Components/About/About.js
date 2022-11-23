import React from "react";
import "./About.css";
import myPic from "../../Assets/myPicMediumBlue.jpg";
import { FaAward } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={myPic} alt="my profile" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>
                <ul>
                  <li>Web development</li> <li>Adult Education</li>{" "}
                  <li>Technical Writing</li>
                </ul>
              </small>
            </article>
            <article className="about_card">
              <MdOutlineSchool className="about_icon" />
              <h5>Education</h5>
              <small>
                <ul>
                  <li>Thinkful Bootcamp</li>
                  <li>Beth Medrash Govoha</li>
                </ul>
              </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>
                <ul>
                  <li>4 Major Web Apps</li>
                  <li>10 Technical Publications</li>
                </ul>
              </small>
            </article>
          </div>

          <p>
            I am a full-stack web developer proficient in HTML, CSS, JavaScript,
            React.js, Node.js, Express.js, RESTful APIs, PostgreSQL, Knex.js,
            Git, and Git-Hub. I also have more than 10 years of experience
            studying, researching, writing, and peer-collaboration in matters of
            Jewish Law. I am curious, love to create, and I love to learn
            anything technology. I am passionate about developing the web and
            harnessing its power to impact our daily lives for the better.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

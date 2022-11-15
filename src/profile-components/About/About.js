import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <Carousel slide={true} indicators={false}>
      <Carousel.Item interval={3000}>
        <div className="d-flex justify-content-center">
          <img
            style={{ width: "52%", height: "52%" }}
            src="./images/mypicture2.jpg"
            class="d-block"
            alt="First Slide"
          />

          <Carousel.Caption className="mb-3">
            <h2 className="fs-5">Hi, My name is Yosef Melamed.</h2>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <div className="d-flex justify-content-center">
          <img
            style={{ width: "90%", height: "90%" }}
            src="https://media.istockphoto.com/photos/denver-skyline-aerial-at-dusk-with-sunset-and-mountains-picture-id1341168285?k=20&m=1341168285&s=612x612&w=0&h=QtyjWI2Px3auNE5tt-AQ-J3g7tTOTUTe2qefogwpstY="
            class="d-block"
            alt="Second Slide"
          />
          <div className="d-flex align-items-center">
            <Carousel.Caption>
              <div>
                <h3 style={{ marginBottom: "30px", lineHeight: "50px" }}>
                  I live in Denver, Colorado, minutes away from one of the world
                  epi-centers of technological advancement.
                </h3>
              </div>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <div className="d-flex justify-content-center">
          <img
            src="https://media.istockphoto.com/photos/empty-classroom-with-desks-and-chairs-lines-and-dots-forming-a-plexus-picture-id1330206200?k=20&m=1330206200&s=612x612&w=0&h=ZMTxcruYJyUDTydtwrO0Rc8B8B5io2OaZBq0_4zs9Gg="
            class="d-block w-75 h-75"
            alt="Third Slide"
          />
          <Carousel.Caption>
            <h3 className="pb-3 mb-3">
              For the past 5 years I was a Full Time Scholar and Teacher at the
              Denver Community Kollel where I collaborated with peers,
              coordinated technical publications, presented classes and
              presentations, and engaged in educational outreach, all while
              getting to know some pretty awesome people in the process.
            </h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <div className="d-flex justify-content-center">
          <img
            src="https://media.istockphoto.com/photos/software-developers-at-the-office-picture-id1432779415?k=20&m=1432779415&s=612x612&w=0&h=cSAvj_Q7lbaCo323ua-zI3AwK6RIccDmDGaxfN1vb2A="
            class="d-block w-75 h-75"
            alt="Third Slide"
          />
          <Carousel.Caption>
            <h4 style={{ lineHeight: "35px" }} className="pb-2 mb-2">
              Growing up, I was always passionate about computers and the
              possibilities they would bring for the future. With the completion
              of my teaching tenure and my computer training a few months ago, I
              was able to realize my life-long dream of developing the web and
              harnessing its power to impact our daily lives for the better.
            </h4>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

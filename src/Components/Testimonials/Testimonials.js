import React from "react";
import "./Testimonials.css";
import MyPicture from "../../Assets/mypicture1.jpg";
import profile from "../../Assets/profile.jpg";
import profile3 from "../../Assets/profile3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials_container"
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={MyPicture} alt="avatar1" />
          </div>
          <h5 className="client_name">Mel Josephs</h5>
          <small className="client_review">
            I have known Yosef for over ten years. He is detail oriented, hard
            working, and gets the job done! I highly reccomend his work and I am
            very satisfied with the work he has done for me!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={profile} alt="avatar1" />
          </div>
          <h5 className="client_name">Joseph Samuels</h5>
          <small className="client_review">
            I have worked together with Yosef for the last 5 years. Yosef is
            highly focused and he will get the job done at all costs. I highly
            reccomend him.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={profile3} alt="avatar1" />
          </div>
          <h5 className="client_name">Chaver Shnayim</h5>
          <small className="client_review">
            As a close friend, I highly reccomend Yosef for any job. He is
            honest, transparent, and trustworthy.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;

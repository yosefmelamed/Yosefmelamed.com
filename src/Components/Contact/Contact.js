import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_twef20c",
        "template_14pj9wj",
        form.current,
        "VkV6AGFi-lYqXuIzh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <a href="mailto:yosefmelamed112@gmail.com" target="blank">
              <MdOutlineEmail className="contact_option-icon" />
            </a>
            <h4>Email</h4>
            <h5>yosefmelamed112@gmail.com</h5>
            <a href="mailto:yosefmelamed112@gmail.com" target="blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <a
              href="https://api.whatsapp.com/send?phone=8482103936"
              target="blank"
            >
              <BsWhatsapp className="contact_option-icon" />
            </a>
            <h4>Whats App</h4>
            <h5>Direct Message</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8482103936"
              target="blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

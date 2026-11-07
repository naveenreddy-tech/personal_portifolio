import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>
            Contact <span>Us</span>
          </h2>
          <p>
            Have a project in mind, opportunities to discuss, or just want to
            connect? Feel free to reach out anytime.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h4>Email</h4>
            <a
              href="mailto:naveenreddy67045@gmail.com"
              data-cursor="disable"
            >
              naveenreddy67045@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h4>Phone</h4>
            <a href="tel:+917893467045" data-cursor="disable">
              +91 78934 67045
            </a>
          </div>

          <div className="contact-card">
            <h4>Location</h4>
            <p data-cursor="disable">Hyderabad, India</p>
          </div>
        </div>

        <div className="contact-socials-wrapper">
          <h4>Social Profiles</h4>
          <div className="contact-social-links">
            <a
              href="https://github.com/naveenreddy018"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social-btn"
            >
              <FaGithub /> GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kommidinaveen"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social-btn"
            >
              <FaLinkedinIn /> LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:naveenreddy67045@gmail.com"
              data-cursor="disable"
              className="contact-social-btn"
            >
              <MdEmail /> Email Me <MdArrowOutward />
            </a>
          </div>
        </div>

        <div className="contact-footer-bar">
          <h5>
            Designed and Developed by <span>Kommidi Naveen Reddy</span>
          </h5>
          <div className="contact-footer-copy">
            <MdCopyright /> {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

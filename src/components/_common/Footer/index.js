import React from "react";

// third-party packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

//style
import "./style.scss";

function Footer({ openContactModal, openModal }) {
  return (
    <div className="mobile-footer hide-desktop">
      <div className="footer-container">
        <div className="icons-container">
          <div className="icons">
            <a href="mailto:gupta.shivani7898@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
            <a
              href="https://github.com/gshivani2201"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivanigupta01"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
          <h4
            className="contact-btn"
            onClick={openModal}
          >
            Contact Me
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;

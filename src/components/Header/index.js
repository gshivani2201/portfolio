import React from "react";

// third-party packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

//style
import "./style.scss";

function Header({ tabsList, activeTab, setActiveTab, openModal }) {
  return (
    <div className="navigation-header">
      <div className="navigation-container">
        {tabsList.map((tabName, i) => {
          return (
            <div
              className={`tab-box ${activeTab === tabName ? "active" : ""}`}
              key={i}
              onClick={() => setActiveTab(tabName)}
            >
              <h4 className="tab-name">{tabName.split("_").join(" ")}</h4>
            </div>
          );
        })}
      </div>
      <div className="header-container">
        <div className="icons-container">
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
          <div>
            {" "}
            <h4 onClick={openModal}>Contact Me</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

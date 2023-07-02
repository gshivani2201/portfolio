import React from "react";

// third-party packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

//style
import "./style.scss";

function Header({ tabsList, activeTab, setActiveTab }) {
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
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <h4>Contact Me</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;

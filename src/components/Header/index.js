import React, { useState } from "react";

// third-party packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Menu as MenuIcon } from "@mui/icons-material";
import { Drawer } from "@mui/material";

//style
import "./style.scss";

const additionalNavs = [
  {
    label: "Github",
    key: "github",
    url: "https://github.com/gshivani2201",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    key: "linkedin",
    url: "https://www.linkedin.com/in/shivanigupta01",
    icon: faLinkedin,
  },
  {
    label: "Mail",
    key: "mail",
    url: "mailto:gupta.shivani7898@gmail.com",
    icon: faEnvelope,
  },
];

function Header({
  tabsList,
  activeTab,
  setActiveTab,
  openModal,
  openContactModal,
}) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const _toggleMobileMenu = () => setOpenMobileMenu((prev) => !prev);

  return (
    <div className="navigation-header">
      <div className="navigation-container md lg">
        {tabsList.map((tabName, i) => {
          return (
            <div
              className={`tab-box ${activeTab === tabName ? "active" : ""} ${tabName}`}
              key={i}
              onClick={() => setActiveTab(tabName)}
            >
              <h4 className="tab-name">{tabName.split("_").join(" ")}</h4>
            </div>
          );
        })}
      </div>
      <div className="header-container md lg">
        <div className="icons-container">
          <div className="icons">
            {additionalNavs.map(({ label, key, icon, url }) => (
              <a href={url} rel="noreferrer" target="_blank" key={key}>
                <FontAwesomeIcon title={label} icon={icon} className="icon" />
              </a>
            ))}
          </div>
          <div
            className={`tab-box ${openContactModal ? "active" : ""}`}
            onClick={openModal}
          >
            <h4 className="tab-name">Contact Me</h4>
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div className="xs sm navigation header">
        <MenuIcon onClick={_toggleMobileMenu} />
      </div>

      {openMobileMenu ? (
        <Drawer
          open={openMobileMenu}
          onClose={_toggleMobileMenu}
          anchor="bottom"
          sx={{
            ".MuiDrawer-paper": {
              backgroundColor: "transparent",
            },
          }}
        >
          <div className="navigation-container xs sm">
            {[...tabsList]
              .filter((tabName) => tabName !== "experience")
              .map((tabName, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setActiveTab(tabName);
                      _toggleMobileMenu();
                    }}
                    className="tab-box"
                  >
                    <h4 className="tab-name">{tabName.split("_").join(" ")}</h4>
                  </div>
                );
              })}
            {additionalNavs.map(({ label, key, url }) => (
              <a
                href={url}
                rel="noreferrer"
                target="_blank"
                key={key}
                className="tab-name"
                onClick={() => _toggleMobileMenu()}
              >
                {label}
              </a>
            ))}
            <div
              className="tab-name"
              onClick={() => {
                openModal();
                _toggleMobileMenu();
              }}
            >
              Contact Me
            </div>
          </div>
        </Drawer>
      ) : null}
    </div>
  );
}

export default Header;

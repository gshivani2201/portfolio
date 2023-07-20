import React from "react";

//font awesome
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//styles
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const experiences = [
  "Junior Frontend Developer",
  "Frontend Developer intern",
  "Web Developer",
];

function Experience() {
  const pagination = {
    el: ".list-container",
    clickable: true,
    renderBullet: function (index, className) {
      return renderBullets(index, className);
    },
  };

  const renderBullets = (index, className) => {
    return `<li key=${index} class=${className}>
          <div>${experiences[index]}</div>
      </li>`;
  };

  return (
    <>
      <div className="experience-section">
        <a
          href="shivani-gupta-resume.pdf"
          className="download-btn"
          download="shivani_gupta_resume"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </a>
        <div className="experience-content-container">
          <div className="experiences-list">
            <ul className="list-container">
              {/* <li>
                <div>exp 2</div>
                <div className="circle hide"></div>
              </li>
              <li>
                <div>exp 3</div>
                <div className="circle hide"></div>
              </li>
              <li>
                <div>exp 4</div>
                <div className="circle hide"></div>
              </li> */}
            </ul>
          </div>
          <div className="selected-experience-summary">
            <Swiper
              direction={"vertical"}
              pagination={pagination}
              modules={[Pagination, Mousewheel]}
              className="mySwiper"
              mousewheel={true}
            >
              <SwiperSlide>
                <div className="date-location">
                  <div>Nov, 2022 - Present</div>
                  <div>Gurugram, Haryana</div>
                </div>
                <div className="summary">
                  <p>
                    A prominent image recognition solution provider for FMCG
                    companies and retailers globally to help them maximize their
                    sales.
                  </p>
                </div>
                <div className="responsibilities">
                  <ul className="responsibilities-list">
                    <li>
                      Developed code that deals with large data sets by
                      rendering components on UI and optimizing API calls to
                      minimize HTTP requests by 23%.
                    </li>
                    <li>
                      Responsible for developing & delivering new & significant
                      features in websites and web applications used within the
                      company and by clients.
                    </li>
                    <li>
                      Ensuring efficient working on critical applications and
                      tools. Delivering bug fixes in a timely manner.
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="date-location">
                  <div>Jun, 2022 - Nov, 2022</div>
                  <div>Gurugram, Haryana</div>
                </div>
                <div className="summary">
                  <p>
                    A prominent image recognition solution provider for FMCG
                    companies and retailers globally to help them maximize their
                    sales.
                  </p>
                </div>
                <div className="responsibilities">
                  <ul className="responsibilities-list">
                    <li>
                      Utilized HTML, CSS, JavaScript, jQuery, react, and Redux
                      to build web applications and webpages for the company and
                      clients.
                    </li>
                    <li>
                      Added dynamic features using APIs in 11+ web applications
                      used by company employees and clients.
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="date-location">
                  <div>Feb, 2022 - Jun, 2022</div>
                  <div>Remote</div>
                </div>
                <div className="summary">
                  <p>
                    100Devs is an agency that provides training for full-stack
                    web development in a 30-weeks program.
                  </p>
                </div>
                <div className="responsibilities">
                  <ul className="responsibilities-list">
                    <li>
                      Designed, developed, and tested frontend for website and
                      web applications to attain engagement and
                      user-friendliness.
                    </li>
                    <li>
                      Built semantically structured static, responsive websites
                      and 9 web applications.
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;

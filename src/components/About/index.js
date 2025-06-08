import React from "react";

//styles
import "./style.scss";

//3rd party packages
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import resume from "../../assets/files/Shivani_Gupta_Resume.pdf";

const skills = [
  {
    title: "Programming Languages",
    tech: [
      {
        tech_name: "JavaScript",
        url: "https://javascript.info/",
      },
      {
        tech_name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        tech_name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
  },
  {
    title: "Libraries & Frameworks",
    tech: [
      {
        tech_name: "Node.js",
        url: "https://nodejs.org/",
      },
      {
        tech_name: "Express.js",
        url: "https://expressjs.com/",
      },
      {
        tech_name: "React.js",
        url: "https://react.dev/",
      },
      {
        tech_name: "Redux",
        url: "https://redux.js.org/",
      },
      {
        tech_name: "jQuery",
        url: "https://jquery.com/",
      },
      {
        tech_name: "Material UI",
        url: "https://mui.com/",
      },
      {
        tech_name: "BootStrap",
        url: "https://getbootstrap.com/",
      },
    ],
  },
  {
    title: "Databases",
    tech: [
      {
        tech_name: "MongoDB",
        url: "https://www.mongodb.com/",
      },
      {
        tech_name: "MySQL",
        url: "https://www.mysql.com/",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    tech: [
      {
        tech_name: "VSCode",
        url: "https://code.visualstudio.com/",
      },
      {
        tech_name: "Git",
        url: "https://git-scm.com/",
      },
      {
        tech_name: "GitHub",
        url: "https://github.com/",
      },
      {
        tech_name: "Netlify",
        url: "https://www.netlify.com/",
      },
      {
        tech_name: "Render",
        url: "https://render.com/",
      },
      {
        tech_name: "FireBase",
        url: "https://firebase.google.com/",
      },
      {
        tech_name: "AWS",
        url: "https://aws.amazon.com/",
      },
    ],
  },
];

function About() {
  // Function to calculate years of experience
  function calculateExperience(startDate) {
    const today = new Date(); // Current date as per provided context
    const start = new Date(startDate); // Start date of experience

    console.log(today);
    console.log(start);

    // Calculate the difference in years
    let years = today.getFullYear() - start.getFullYear();
    const months = today.getMonth() - start.getMonth();

    // Adjust if the current date hasn't reached the start date's month/day
    if (months < 0 || (months === 0 && today.getDate() < start.getDate())) {
      years--;
    }

    // Return years with one decimal place for partial years
    const totalYears = (today - start) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.ceil(totalYears);
  }

  return (
    <div className="about-container">
      <div className="greeting-section">
        <h1 className="name">
          Hi there!{" "}
          <WavingHandIcon sx={{ fontSize: "40px", verticalAlign: "middle" }} />{" "}
          I am Shivani Gupta
        </h1>
        <h3 className="current-role">Frontend Developer at ParallelDots</h3>
      </div>
      <div className="btn-container">
        <a href={resume} className="download-btn content-btn">
          {" "}
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </a>
      </div>
      <div className="about-me">
        <p className="para first">
          From a non-technical background to a skilled Full Stack Web Developer,
          I’ve honed expertise in modern technologies like React.js, Redux
          Toolkit, jQuery, Node.js, and Express.js. With over{" "}
          {calculateExperience("2022-06-16")} years of professional experience
          building real-world projects, I’m passionate about crafting efficient,
          innovative solutions to solve complex problems.
        </p>
        <p className="para second">
          My approach is driven by curiosity, adaptability, and a commitment to
          creating impactful digital experiences. Explore my work to see how I
          transform ideas into reality!
        </p>
      </div>
      <div>
        {/* <h3>Skills</h3> */}
        <div className="skills-section">
          {skills.map((skill, i) => {
            return (
              <div key={i} className="skills-container">
                <h4>{skill.title}</h4>
                <div className="skills-list">
                  {skill.tech &&
                    skill.tech.map((item, id) => {
                      return (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          key={id}
                        >
                          <div className="skill-item">
                            <p>{item.tech_name}</p>
                          </div>
                        </a>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;

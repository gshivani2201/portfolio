import React from "react";

//styles
import "./style.scss";

//3rd party packages
import WavingHandIcon from '@mui/icons-material/WavingHand';

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
  return (
    <div className="about-container">
      <div className="greeting-section">
        <h1 className="name">Hi there! <WavingHandIcon sx={{fontSize: "40px", verticalAlign: "middle"}}/> I am Shivani Gupta</h1>
        <h3 className="current-role">Frontend Web Developer at ParallelDots</h3>
      </div>
      <div className="about-me">
        <p className="para first">
          From belonging to a non-technical education background to becoming a
          full stack web developer, I have accumulated vast knowledge and 1.5+
          years of professional working experience on significant frontend
          technologies like React.js, jQuery, Redux toolkit and Node.js,
          Express.js for backend along with other internal libraries, with
          working on real-life projects.
        </p>
        <p className="para second">
          I am determined to use my knowledge to solve real-world problems
          efficiently with an open-minded and curious approach.
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
                        <a href={item.url} target="_blank" rel="noreferrer">
                          <div key={id} className="skill-item">
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

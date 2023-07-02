import React from "react";

const skills = [
  {
    "Programming Language": ["JavaScript", "HTML", "CSS"],
  },
  {
    "Libraries & Frameworks": [
      "Node.js",
      "Express.js",
      "React.js",
      "Redux",
      "jQuery",
      "Material UI",
      "BootStrap",
    ],
  },
  {
    Database: ["MongoDB", "MySQL"],
  },
  {
    "Tools & Platforms": [
      "VSCode",
      "Git",
      "GitHub",
      "Netlify",
      "Render",
      "FireBase",
      "AWS",
    ],
  },
];

function About() {
  return (
    <div>
      <div>
        <h1>Shivani Gupta</h1>
        <h3>Frontend web developer</h3>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <h3>Skills</h3>
        <div>
          {skills.map((skill, i) => {
            const title = Object.keys(skill)[0];
            return (
              <div key={i}>
                <h5>{title}</h5>
                <div>
                  {skill[title].map((item, id) => {
                    return (
                      <div key={id}>
                        <p>{item}</p>
                      </div>
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
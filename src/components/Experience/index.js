import React from "react";

//styles
import "./style.scss";

function Experience() {
  return (
    <div className="experience-section">
      <div className="experience-content-container">
        <div className="experiences-list">
          <ul className="list-container">
            <li>
              <div>exp 1</div>
              <div className="circle"></div>
            </li>
            <li>
              <div>exp 2</div>
              <div className="circle hide"></div>
            </li>
          </ul>
        </div>
        <div className="selected-experience-summary">
          <div className="date-location">
            <div>date</div>
            <div>location</div>
          </div>
          <div className="summary">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="responsibilities">
            <ul className="responsibilities-list">
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

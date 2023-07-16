import React from "react";

//styles
import "./style.scss";

function ProjectCard({ title, imageUrl, url, content, github }) {
  return (
    // <a href={url} className="card-link">
    <div className="project-card">
      <div className="title">{title}</div>
      <div className="image-container">
        <img src={imageUrl} alt={title} className="image" />
      </div>
      <div className="summary">{content}</div>
      <div className="bottom">
        <div className="links">
          <a href={url} target="_blank" rel="noreferrer">
            Site
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
    // </a>
  );
}

export default ProjectCard;

import React from "react";

//styles
import "./style.scss";

function ProjectCard({ title, imageUrl, url, content }) {
  return (
    <a href={url} className="card-link">
      <div className="project-card">
        <div className="title">{title}</div>
        <div className="image-container">
          <img src={imageUrl} alt={title} className="image" />
        </div>
        <div className="summary">{content}</div>
      </div>
    </a>
  );
}

export default ProjectCard;

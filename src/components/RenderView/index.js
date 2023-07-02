import React from "react";
import About from "../About";
import Experience from "../Experience";
import Projects from "../Projects";

function RenderView({ activeTab }) {
  switch (activeTab) {
    case "about_me":
      return <About />;

    case "experience":
      return <Experience />;

    case "projects":
      return <Projects />;

    default:
      return <div>Something went wrong</div>;
  }
}

export default RenderView;

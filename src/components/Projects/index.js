import React, { useState } from "react";

//styles
import "./style.scss";

//assets
import ShopHere from "../../assets/shophere.png";
import Delicious from "../../assets/deliciouss.png";
import NodeApp from "../../assets/node-app.png";
import YouText from "../../assets/youtext.png";
import ImageDisplayer from "../../assets/image-displayer.png";
import TodoApp from "../../assets/todo-app.png";

//3rd party
import { Pagination, Stack } from "@mui/material";

//child components
import ProjectCard from "./ProjectCard";

function Projects() {
  const [pageCount, setPageCount] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="projects-section">
      {currentPage === 1 ? (
        <>
          <ProjectCard
            title="ShopHere"
            imageUrl={ShopHere}
            url="https://shophere-online-shop.netlify.app/"
            content="ShopHere is an online shopping app. Users can check products and product details. It is developed using "
          />
          <ProjectCard
            title="Deliciouss"
            imageUrl={Delicious}
            url="https://deliciousss-recipe-app.netlify.app/"
            content="Deliciouss is a recipe app. User can choose between 4 types of cuisines or also can search for almost any kind of recipe using searchbar. It is developed using . Happy cooking!"
          />
          <ProjectCard
            title="EcomStore"
            imageUrl={NodeApp}
            url="https://ecomstore-9o2v.onrender.com/"
            content="EcomStore is an online shopping full stack web app. It has authentication enabled to signup/login along with Admin Panel to create or delete product. Mainly developed using "
          />
        </>
      ) : (
        <>
          <ProjectCard
            title="Image Displayer"
            imageUrl={ImageDisplayer}
            url="https://image-displayer.netlify.app/"
            content="Image Displayer fetches 100 images from an API and displays it. Sorting is enabled on the basis of user input in searchbar. Developed using "
          />
          <ProjectCard
            title="YouText"
            imageUrl={YouText}
            url="https://youtext.netlify.app/"
            content="YouText is a text modifier application. User can type text, edit it, apply capitalizing, uppercasing, removing extra whitespace etc. Developed using "
          />
          <ProjectCard
            title="Todo App"
            imageUrl={TodoApp}
            url="https://shivani-todo.netlify.app/"
            content="Todo app creates, edits and displays list of todos that the user enters. It is developed using "
          />
        </>
      )}
      <Stack spacing={2} sx={{ margin: "auto" }}>
        <Pagination
          count={pageCount}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setCurrentPage(value)}
          page={currentPage}
        />
      </Stack>
    </div>
  );
}

export default Projects;

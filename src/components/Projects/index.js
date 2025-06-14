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
import Postinger from "../../assets/postinger.png";
import Friendlee from "../../assets/friendlee.png";

//3rd party
import { Pagination, Stack } from "@mui/material";

//child components
import ProjectCard from "./ProjectCard";

function Projects() {
  const [pageCount, setPageCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="projects-section lg">
        {currentPage === 1 ? (
          <>
            <ProjectCard
              title="Friendlee"
              imageUrl={Friendlee}
              url="https://friendlee.vercel.app/"
              content="A social media app where user can create an account, add friends & chat real time. Developed using React.js, Express.js and Graphql and MongoDB."
              github="https://github.com/gshivani2201/chatapp-frontend"
            />
            <ProjectCard
              title="Postinger"
              imageUrl={Postinger}
              url="http://postinger.s3-website.ap-south-1.amazonaws.com/"
              content="A social media app where user can create an account & create posts in the feed. Developed using React.js, Express.js and Graphql and MongoDB."
              github="https://github.com/gshivani2201/frontend"
            />
            <ProjectCard
              title="Deliciouss"
              imageUrl={Delicious}
              url="https://deliciousss-recipe-app.netlify.app/"
              content="Deliciouss is a recipe app. User can choose between 4 types of cuisines or also can search for almost any kind of recipe using searchbar. It is developed using React.js. Happy cooking!"
              github="https://github.com/gshivani2201/Recipe-app"
            />
          </>
        ) : currentPage === 2 ? (
          <>
            <ProjectCard
              title="ShopHere"
              imageUrl={ShopHere}
              url="https://shophere-online-shop.netlify.app/"
              content="ShopHere is an online shopping app. Users can check products and product details. It is developed using React.js & Redux.js."
              github="https://github.com/gshivani2201/online-shop"
            />
            <ProjectCard
              title="EcomStore"
              imageUrl={NodeApp}
              url="https://ecomstore-9o2v.onrender.com/"
              content="EcomStore is an online shopping full stack web app. It has authentication enabled to signup/login along with Admin Panel to create or delete product. Mainly developed using Express.js, and MongoDB."
              github="https://github.com/gshivani2201/nodejs_complete_guide"
            />
            <ProjectCard
              title="Image Displayer"
              imageUrl={ImageDisplayer}
              url="https://image-displayer.netlify.app/"
              content="Image Displayer fetches 100 images from an API and displays it. Sorting is enabled on the basis of user input in searchbar. Developed using React.js."
              github="https://github.com/gshivani2201/image-displayer"
            />
          </>
        ) : (
          <>
            <ProjectCard
              title="Todo App"
              imageUrl={TodoApp}
              url="https://shivani-todo.netlify.app/"
              content="Todo app creates, edits and displays list of todos that the user enters. It is developed using React.js."
              github="https://github.com/gshivani2201/ReactTodoApp"
            />
            <ProjectCard
              title="YouText"
              imageUrl={YouText}
              url="https://youtext.netlify.app/"
              content="YouText is a text modifier application. User can type text, edit it, apply capitalizing, uppercasing, removing extra whitespace etc. Developed using Bootstrap and React.js."
              github="https://github.com/gshivani2201/YouText"
            />
          </>
        )}
      </div>

      <div className="projects-section xs sm">
        <ProjectCard
          title="Friendlee"
          imageUrl={Friendlee}
          url="https://friendlee.vercel.app/"
          content="A social media app where user can create an account, add friends & chat real time. Developed using React.js, Express.js and Graphql and MongoDB."
          github="https://github.com/gshivani2201/chatapp-frontend"
        />
        <ProjectCard
          title="Postinger"
          imageUrl={Postinger}
          url="http://postinger.s3-website.ap-south-1.amazonaws.com/"
          content="A social media app where user can create an account & create posts in the feed. Developed using React.js, Express.js and Graphql and MongoDB."
          github="https://github.com/gshivani2201/frontend"
        />
        <ProjectCard
          title="Deliciouss"
          imageUrl={Delicious}
          url="https://deliciousss-recipe-app.netlify.app/"
          content="Deliciouss is a recipe app. User can choose between 4 types of cuisines or also can search for almost any kind of recipe using searchbar. It is developed using React.js. Happy cooking!"
          github="https://github.com/gshivani2201/Recipe-app"
        />

        <ProjectCard
          title="ShopHere"
          imageUrl={ShopHere}
          url="https://shophere-online-shop.netlify.app/"
          content="ShopHere is an online shopping app. Users can check products and product details. It is developed using React.js & Redux.js."
          github="https://github.com/gshivani2201/online-shop"
        />
        <ProjectCard
          title="EcomStore"
          imageUrl={NodeApp}
          url="https://ecomstore-9o2v.onrender.com/"
          content="EcomStore is an online shopping full stack web app. It has authentication enabled to signup/login along with Admin Panel to create or delete product. Mainly developed using Express.js, and MongoDB."
          github="https://github.com/gshivani2201/nodejs_complete_guide"
        />
        <ProjectCard
          title="Image Displayer"
          imageUrl={ImageDisplayer}
          url="https://image-displayer.netlify.app/"
          content="Image Displayer fetches 100 images from an API and displays it. Sorting is enabled on the basis of user input in searchbar. Developed using React.js."
          github="https://github.com/gshivani2201/image-displayer"
        />

        <ProjectCard
          title="Todo App"
          imageUrl={TodoApp}
          url="https://shivani-todo.netlify.app/"
          content="Todo app creates, edits and displays list of todos that the user enters. It is developed using React.js."
          github="https://github.com/gshivani2201/ReactTodoApp"
        />
        <ProjectCard
          title="YouText"
          imageUrl={YouText}
          url="https://youtext.netlify.app/"
          content="YouText is a text modifier application. User can type text, edit it, apply capitalizing, uppercasing, removing extra whitespace etc. Developed using Bootstrap and React.js."
          github="https://github.com/gshivani2201/YouText"
        />
      </div>
      <Stack spacing={2} sx={{ margin: "auto" }} className="pagination lg">
        <Pagination
          count={pageCount}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setCurrentPage(value)}
          page={currentPage}
        />
      </Stack>
    </>
  );
}

//

export default Projects;

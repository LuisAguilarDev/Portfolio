import React from "react";
import dog from "../assets/dogs.jpg";
import clothes from "../assets/eagle.jpg";

const Project = () => {
  return (
    <>
      <div className="Project_Container" id="Projects2">
        <div className="Project_Title"> Projects</div>
        <div className="Project_Card">
          <a
            href="https://eagleclothes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="Project_img" src={clothes} alt="Not Found" />
          </a>
          <div className="Project_cardtext">
            <p>Eagle Clothes</p>
            <p>
              I developed the project following the SCRUM agile methodology. It
              is a web application to buy clothes that allows the user to search
              and filter garments search and filter garments, as well as access
              to their user panel through a login panel through a login created
              by me using MongoDB and Bcrypt. Bcrypt.
            </p>
            <p>
              I used React, useReducer for global state handling, Material UI
              and SASS for styling, MongoDB, Express and Typescript. I also
              created the routes in the backend with Express and I used Mongoose
              to filter the data received by the frontend.
            </p>
          </div>
        </div>
        <div className="Project_Card">
          <a
            href="https://client-omega-red.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="Project_img" src={dog} alt="Not Found" />
          </a>
          <div className="Project_cardtext">
            <p>Dog Breeds</p>
            <p>
              It was my first project with JavaScript, it was a web application
              that allowed users to search for dog breeds. web application that
              allowed users to search for dog breeds by name and filter by
              temperament. by name and filter by temperament.
            </p>
            <p>
              I used Redux for global state handling and pure CSS for styling.
            </p>
            <p>
              On the backend, I used Express to create the routes and PostgreSQL
              and Sequelize to filter the data to be sent to the frontend.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

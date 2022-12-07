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
              Desarrollé un proyecto siguiendo la metodología ágil SCRUM. Se
              trata de una aplicación web de compra de ropa que permite al
              usuario buscar y filtrar prendas, así como acceder a su panel de
              usuario mediante un login creado por mí utilizando MongoDB y
              Bcrypt.
            </p>
            <p>
              Utilicé React, useReducer para el manejo de estados globales,
              Material UI y SASS para el estilo, MongoDB, Express y Typescript.
              También creé las rutas en el backend con Express y utilicé
              Mongoose para filtrar los datos que recibe el frontend.
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
              Fue mi primer proyecto con JavaScript, se trataba de una
              aplicación web que permitía a los usuarios buscar razas de perros
              por su nombre y filtrar por temperamento.
            </p>
            <p>
              Utilicé Redux para el manejo de estados globales y CSS puro para
              el estilo.
            </p>
            <p>
              En el backend, utilicé Express para crear las rutas y PostgreSQL y
              Sequelize para filtrar los datos que se enviarían al frontend.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

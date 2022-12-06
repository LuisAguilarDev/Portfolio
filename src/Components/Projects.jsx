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
              Proyecto que desarrolle aplicando metodología ágil SCRUM. Es una
              aplicación web que permite al usuario comprar ropa. cuenta con
              búsquedas y filtros, panel de usuario, acceso mediante login
              creado por mi utilizando MongoDB y Bcrypt.
            </p>
            <p>
              También utilice React, useReducer para el manejo de estados
              globales, Material UI, MongoDB, Express, Typescript. ·Creé las
              rutas en el backend con Express y utilizando Mongoose para filtrar
              los datos que recibirá el frontend.
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
              Proyecto que desarrolle aplicando metodología ágil SCRUM. Es una
              aplicación web que permite al usuario comprar ropa. cuenta con
              búsquedas y filtros, panel de usuario, acceso mediante login
              creado por mi utilizando MongoDB y Bcrypt.
            </p>
            <p>
              También utilice React, Redux, Material UI, MongoDB, Express,
              Typescript. ·Creé las rutas en el backend con Express y utilizando
              Mongoose para filtrar los datos que recibirá el frontend.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

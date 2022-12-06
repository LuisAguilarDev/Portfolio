import React from "react";
import profilepic from "../assets/Foto_Perfil.jpg";

const Content = () => {
  return (
    <div className="Content_Container">
      <div className="Content_content">
        <div>
          <span className="Content_NameTyped">Hi, i'm Luis Aguilar.</span>
          <div className="SubText">
            <div className="Content_Title">Full Stack Developer</div>
            <div className="Content_text">
              Tengo experiencia trabajando con NodeJS, React, Redux, SQL entre
              otras tecnologías del sector, desarrolle un E-commerce para venta
              de ropa, el frontend con base en React y Typescrip, su backend con
              Node, Typescript y MongoDB, con pasarela de pago (Mercado pago),
              también tengo más de 6 años de experiencia en el área Financiera.
            </div>
            <div className="button_container">
              <a
                className="buttonCV"
                href={require("../assets/LUISAGUILARCV.pdf")}
                download="Luis_Aguilar_CV"
              >
                <div>Descargar CV</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="img_container">
        <img className="profilepic" src={profilepic} alt="not found" />
      </div>
    </div>
  );
};

export default Content;

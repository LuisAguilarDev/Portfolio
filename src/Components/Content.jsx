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
              <p className="Content_text">
                Soy un apasionado por la tecnología y el desarrollo de
                aplicaciones web. He aprendido de manera autodidacta y en
                colaboración con la comunidad sobre los lenguajes y frameworks
                más populares, especialmente JavaScript y React. He tenido la
                oportunidad de desarrollar dos aplicaciones web exitosas.
              </p>
              <p className="Content_text">
                Me encanta trabajar en equipo y buscar soluciones creativas a
                problemas complejos. En mi tiempo libre, me gusta mantenerme al
                día con las últimas tendencias en tecnología y experimentar con
                nuevas herramientas.
              </p>
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

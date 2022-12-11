import React from "react";
import profilepic from "../assets/Foto_Perfil.jpg";

const Content = () => {
  return (
    <div className="Content_Container">
      <div className="Content_content">
        <div>
          <span className="Content_NameTyped2">Hi, i'm Luis Aguilar.</span>
          <div className="SubText">
            <div className="Content_Title">Full Stack Developer</div>
            <div className="Content_text">
              <p className="Content_text">
                I am passionate about technology and web development. I have
                learned self-taught and in collaboration with the community
                about the most popular languages and frameworks, especially
                JavaScript and React. I have had the opportunity to develop two
                successful web applications.
              </p>
              <p className="Content_text">
                I love working in teams and finding creative solutions to
                complex problems. In my free time, I like to stay up to date
                with the latest technology trends and experiment with new tools.
              </p>
            </div>
            <div className="button_container">
              <a
                className="buttonCV"
                href={require("../assets/LUISAGUILARCV.pdf")}
                download="Luis_Aguilar_CV"
              >
                <div>Download CV</div>
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

import React from 'react';
import { AiOutlineLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const Social = () => {
  return (
    <div className="Project_Container" id="Socials">
      <div className="Project_Title"> Contact</div>
      <div className="DISPLAY_FLEX">
        <div className="DISPLAY_FLEX">
          <a
            href="mailto:luisgerardo900@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail className="ICON2" />
            <div className="ICON2TEXT">E-mail</div>
          </a>
        </div>
        <div className="DISPLAY_FLEX">
          <a
            href="https://www.linkedin.com/in/luisgaguilarg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin className="ICON2" />
            <div className="ICON2TEXT">LinkedIn</div>
          </a>
        </div>
        <div className="DISPLAY_FLEX">
          <a
            href="https://github.com/LuisAguilarDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="ICON2" />
            <div className="ICON2TEXT">GitHub</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;

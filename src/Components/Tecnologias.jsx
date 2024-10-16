import React from 'react';
import { FaReact, FaCss3Alt, FaAngular } from 'react-icons/fa';
import { AiOutlineHtml5, AiOutlineGithub } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiSequelize,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
  SiMicrosoftsqlserver,
} from 'react-icons/si';

const Tech = () => {
  return (
    <div id="tech_skill">
      <div className="Project_Container">
        <div className="Project_Title">Tech Skills</div>
      </div>
      <div className="Tech_icons">
        <div>
          <div className="ICON_CONTAINER">
            <div>
              <FaReact className="ICON" />
            </div>
          </div>
          <div className="Tech_text">React</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <FaAngular className="ICON" />
          </div>
          <div className="Tech_text">Angular</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <AiOutlineHtml5 className="ICON" />
          </div>
          <div className="Tech_text">HTML5</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <FaCss3Alt className="ICON" />
          </div>
          <div className="Tech_text">CSS</div>
        </div>

        <div>
          <div className="ICON_CONTAINER">
            <IoLogoJavascript className="ICON" />
          </div>
          <div className="Tech_text">Javascript</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <AiOutlineGithub className="ICON" />
          </div>
          <div className="Tech_text">GitHub</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <SiRedux className="ICON" />
          </div>
          <div className="Tech_text">Redux</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <SiTypescript className="ICON" />
          </div>
          <div className="Tech_text">Typecript</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <SiMongodb className="ICON" />
          </div>
          <div className="Tech_text">MongoDB</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <SiSequelize className="ICON" />
          </div>
          <div className="Tech_text">Sequelize</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <SiMicrosoftsqlserver className="ICON" />
          </div>
          <div className="Tech_text">SQL SERVER</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <SiNodedotjs className="ICON" />
          </div>
          <div className="Tech_text">Node.js</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <SiPostgresql className="ICON" />
          </div>
          <div className="Tech_text">PostgreSQL</div>
        </div>
        <div>
          <div className="ICON_CONTAINER">
            <SiExpress className="ICON" />
          </div>
          <div className="Tech_text">Express</div>
        </div>
      </div>
    </div>
  );
};

export default Tech;

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
  SiGraphql,
  SiGooglecloud,
  SiNestjs 
} from 'react-icons/si';
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
const withIconClass = (IconComponent: any) => (
  <IconComponent className="ICON" />
);

const Tech = () => {
  const { t } = useTranslation();

  const tech = [
    { title: 'React', component: withIconClass(FaReact) },
    { title: 'Angular', component: withIconClass(FaAngular) },
    { title: 'HTML5', component: withIconClass(AiOutlineHtml5) },
    { title: 'CSS', component: withIconClass(FaCss3Alt) },
    { title: 'Javascript', component: withIconClass(IoLogoJavascript) },
    { title: 'GitHub', component: withIconClass(AiOutlineGithub) },
    { title: 'Redux', component: withIconClass(SiRedux) },
    { title: 'Typecript', component: withIconClass(SiTypescript) },
    { title: 'MongoDB', component: withIconClass(SiMongodb) },
    { title: 'GraphQL', component: withIconClass(SiGraphql) },
    { title: 'Sequelize', component: withIconClass(SiSequelize) },
    { title: 'SQL SERVER', component: withIconClass(DiMsqlServer) },
    { title: 'NodeJS', component: withIconClass(SiNodedotjs) },
    { title: 'PostgreSQL', component: withIconClass(SiPostgresql) },
    { title: 'Express', component: withIconClass(SiExpress) },
    { title: 'AWS', component: withIconClass(FaAws) },
    { title: 'GCP', component: withIconClass(SiGooglecloud) },
    { title: 'NestJS', component: withIconClass(SiNestjs) },
  ];
  return (
    <div id="tech_skill">
      <div className="Project_Container">
        <div className="Project_Title">{t('skills.title')}</div>
      </div>
      <div className="Tech_icons">
        {tech.length &&
          tech.map((item) => {
            return (
              <div key={item.title}>
                <div className="ICON_CONTAINER">{item.component}</div>
                <div className="Tech_text">{item.title}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tech;

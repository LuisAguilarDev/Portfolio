import React from 'react';
import profilepic from '../assets/Foto_Perfil.jpg';

const Content = ({ lang }) => {
  const content = {
    en: {
      iam: 'Hi, I am Luis Aguilar.',
      summary: [
        `I specialize in Javascript using Angular,
        React, and Node technologies, striving
        for a comprehensive 360° perspective in
        every project to deliver highperformance solutions. I have a proven
        track record of contributing to large-scale
        applications for diverse clients and
        private organizations.`,
        `Beyond technical
        proficiency, I excel as a collaborative
        leader, emphasizing transparent
        communication and data-driven
        decision-making to drive project success.`,
      ],
    },
    es: {
      iam: 'Hola, soy Luis Aguilar.',
      summary: [
        `Me especializo en Javascript utilizando tecnologías de Angular, React y Node, esforzándome por tener una perspectiva integral de 360° en cada proyecto para ofrecer soluciones de alto rendimiento. Tengo un historial comprobado de contribuciones a aplicaciones de gran escala para diversos clientes y organizaciones privadas.`,
        `Más allá de la competencia técnica, sobresalgo como un líder colaborativo, enfatizando la comunicación transparente y la toma de decisiones basadas en datos para garantizar el éxito de los proyectos.`,
      ],
    },
  };
  return (
    <div className="Content_Container">
      <div className="Content_content">
        <div>
          <span className="Content_NameTyped">{content[lang]?.iam}</span>
          <div className="SubText">
            <div className="Content_Title">Full Stack Developer</div>
            <div className="Content_text">
              {content[lang]?.summary.map((item) => {
                return (
                  <p key={`${item}`} className="">
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="button_container">
              <a
                className="buttonCV"
                href={require('../assets/LUISAGUILARCV.pdf')}
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

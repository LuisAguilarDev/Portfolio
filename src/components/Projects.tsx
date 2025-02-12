import dog from '../assets/dogs.jpg';
import clothes from '../assets/eagle.jpg';
import costume from '../assets/costume-app.png';
import Card from './Card';
import { useTranslation } from 'react-i18next';

const Project = () => {
  const { t } = useTranslation();
  const content = [
    {
      link: t('project.link1'),
      photo: costume,
      title: t('project.title1'),
      description: [
        t('project.description1_1'),
        t('project.description1_2'),
        t('project.description1_3'),
      ],
      urlback: t('project.urlback1'),
      urlfront: t('project.urlfront1'),
    },
    {
      link: t('project.link2'),
      photo: clothes,
      title: t('project.title2'),
      description: [
        t('project.description2_1'),
        t('project.description2_2'),
        t('project.description2_3'),
      ],
      urlback: t('project.urlback2'),
      urlfront: t('project.urlfront2'),
    },
    // vuelen alto perritos
    // {
    //   photo: dog,
    //   title: t("project.title3"),
    //   description: [
    //     t("project.description3_1"),
    //     t("project.description3_2"),
    //     t("project.description3_3"),
    //     t("project.description3_4"),
    //   ],
    //   urlback:  t("project.urlback3"),
    //   urlfront:  t("project.urlfront3"),
    // },
  ];

  return (
    <section className="Project_Container" id="Projects2">
      <h2 className="Project_Title">{t('projects.title')}</h2>
      {content.map(({ link, photo, title, description, urlback, urlfront }) => {
        return (
          <Card
            key={link}
            title={title}
            photo={photo}
            description={description}
            link={link}
            urlback={urlback}
            urlfront={urlfront}
          />
        );
      })}
    </section>
  );
};

export default Project;

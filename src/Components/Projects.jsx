import React, { useEffect, useState } from 'react';
import dog from '../assets/dogs.jpg';
import clothes from '../assets/eagle.jpg';
import costume from '../assets/costume-app.png';
import Card from './Card';

const Project = ({ lang }) => {
  const contentEsp = [
    {
      link: 'https://costume-app.vercel.app/',
      photo: costume,
      title: 'DisguiseMe - ONLINE',
      description: [
        `Desarrolle una aplicación que utiliza los servicios de cloudinary de transformacion de imagenes, el servicio estará disponible hasta el 01/11/2024.`,
        `Como una plataforma de vanguardia diseñada para agilizar la experiencia del usuario con una funcionalidad sin fisuras y un diseño UI/UX moderno, utilize zustand para el manejo de estados globales.`,
        `Integra tecnologías avanzadas como Vite para el frontend y Python en el backend, la aplicación garantiza una interacción óptima en todos los dispositivos.`,
      ],
      urlback: 'https://github.com/LuisAguilarDev/costume_yourself_api',
      urlfront: 'https://github.com/LuisAguilarDev/costume-app',
    },
    {
      link: 'https://eagleclothes.vercel.app/',
      photo: clothes,
      title: 'Eagle Clothes - DEPRECATED',
      description: [
        `Desarrollé el proyecto siguiendo la metodología ágil SCRUM. Se
        trata de una aplicación web de compra de ropa que permite al
        usuario buscar y filtrar prendas, así como acceder a su panel de
        usuario mediante un login creado por mí utilizando MongoDB y
        Bcrypt.`,
        `Utilicé React, useReducer para el manejo de estados globales,
        Material UI y SASS para el estilo, MongoDB, Express y Typescript.
        También creé las rutas en el backend con Express y utilicé
        Mongoose para filtrar los datos que recibe el frontend.`,
        `Aunque esta deprecado pueden ver el codigo en github sobre la implementacion`,
      ],
      urlback: 'https://github.com/LuisAguilarDev/EagleClothes-Backend',
      urlfront: 'https://github.com/LuisAguilarDev/eagleclothes',
    },
    {
      link: 'https://client-omega-red.vercel.app/',
      photo: dog,
      title: 'Dog Breeds - DEPRECATED',
      description: [
        `Fue mi primer proyecto con JavaScript, se trataba de una
              aplicación web que permitía a los usuarios buscar razas de perros
              por su nombre y filtrar por temperamento.`,
        ` Utilicé Redux para el manejo de estados globales y CSS puro para
              el estilo.`,
        ` En el backend, utilicé Express para crear las rutas y PostgreSQL y
              Sequelize para filtrar los datos que se enviarían al frontend.`,
        `Aunque esta deprecado pueden ver el codigo en github sobre la implementacion`,
      ],
      urlback: 'https://github.com/LuisAguilarDev/DogBreeds/tree/main/api',
      urlfront: 'https://github.com/LuisAguilarDev/DogBreeds/tree/main/client',
    },
  ];
  const contentEng = [
    {
      link: 'https://costume-app.vercel.app/',
      photo: costume,
      title: 'DisguiseMe - ONLINE',
      description: [
        `I developed an application that uses Cloudinary's image transformation services. The service will be available until 11/01/2024. It's a cutting-edge platform designed to streamline user experience with seamless functionality and modern UI/UX design. I used Zustand for global state management. The app integrates advanced technologies like Vite for the frontend and Python on the backend, ensuring optimal interaction across all devices.`,
      ],
      urlback: 'https://github.com/LuisAguilarDev/costume_yourself_api',
      urlfront: 'https://github.com/LuisAguilarDev/costume-app',
    },
    {
      link: 'https://eagleclothes.vercel.app/',
      photo: clothes,
      title: 'Eagle Clothes - DEPRECATED',
      description: [
        `I developed the project following the agile SCRUM methodology. It is an online clothing store web application that allows users to search and filter garments, as well as access their user panel via a login I created using MongoDB and Bcrypt.`,
        `I used React, useReducer for global state management, Material UI and SASS for styling, MongoDB, Express, and TypeScript. I also created backend routes using Express and used Mongoose to filter the data received by the frontend.`,
        `Although deprecated, you can still view the implementation code on GitHub.`,
      ],
      urlback: 'https://github.com/LuisAguilarDev/EagleClothes-Backend',
      urlfront: 'https://github.com/LuisAguilarDev/eagleclothes',
    },
    {
      link: 'https://client-omega-red.vercel.app/',
      photo: dog,
      title: 'Dog Breeds - DEPRECATED',
      description: [
        `This was my first project with JavaScript. It was a web application that allowed users to search for dog breeds by name and filter by temperament.`,
        `I used Redux for global state management and pure CSS for styling.`,
        `On the backend, I used Express to create the routes, and PostgreSQL and Sequelize to filter the data sent to the frontend.`,
        `Although deprecated, you can still view the implementation code on GitHub.`,
      ],
      urlback: 'https://github.com/LuisAguilarDev/DogBreeds/tree/main/api',
      urlfront: 'https://github.com/LuisAguilarDev/DogBreeds/tree/main/client',
    },
  ];

  const [content, setContent] = useState([]);
  useEffect(() => {
    if (lang === 'es') {
      setContent(contentEsp);
    } else {
      setContent(contentEng);
    }
  }, [lang]);
  return (
    <div className="Project_Container" id="Projects2">
      <div className="Project_Title"> Projects</div>
      {content.map(({ link, photo, title, description, urlback, urlfront }) => {
        return (
          <Card
            key="link"
            title={title}
            photo={photo}
            description={description}
            link={link}
            urlback={urlback}
            urlfront={urlfront}
          />
        );
      })}
    </div>
  );
};

export default Project;

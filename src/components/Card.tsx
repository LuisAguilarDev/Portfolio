import { FaGithub,FaLink  } from 'react-icons/fa';
export default function Card({
  title,
  description,
  link,
  photo,
  urlback,
  urlfront,
}: {
  title: string;
  description: string[];
  link?: string;
  photo: string;
  urlback: string;
  urlfront: string;
}) {
  return (
    <div className="Project_Card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className={`Project_img ${link ? "cursor-pointer" : "cursor-text"}`} src={photo} alt="Not Found" />
      </a>
      <div className="Project_cardtext">
        <p className="text-description">{title}</p>
        <br />
        {description.map((item) => {
          return (
            <>
              <p className="text-description w-[50ch]" key={item}>
                {item}
              </p>{' '}
              <br />
            </>
          );
        })}
        <div className="flex">
          <a
            className={`inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition border
                border-gray-300 rounded-full bg-[#08344d] dark:border-gray-600 dark:text-white 
                 text-md hover:border-gray-300 
                 hover:text-[#3b8686] group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white
                  focus-visible:ring-offset-2 active:bg-black`}
            target="_blank"
            rel="noopener noreferrer"
            href={`${urlfront}`}
          >
            <FaGithub />
            Frontend
          </a>
          <a
            className={`inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition border
                border-gray-300 rounded-full bg-[#08344d] dark:border-gray-600 dark:text-white 
                 text-md hover:border-gray-300 
                 hover:text-[#3b8686] group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white
                  focus-visible:ring-offset-2 active:bg-black`}
            target="_blank"
            rel="noopener noreferrer"
            href={`${urlback}`}
          >
            <FaGithub />
            Backend
          </a>
          {link && <a
            className={`inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition border
                border-gray-300 rounded-full bg-[#08344d] dark:border-gray-600 dark:text-white 
                 text-md hover:border-gray-300 
                 hover:text-[#3b8686] group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white
                  focus-visible:ring-offset-2 active:bg-black`}
            target="_blank"
            rel="noopener noreferrer"
            href={`${link}`}
          >
            <FaLink />
            Preview
          </a>}
        </div>
      </div>
    </div>
  );
}

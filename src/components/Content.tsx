import { useTranslation } from 'react-i18next';
import profilepic from '../assets/Foto_Perfil.jpg';
import { FaFileDownload } from 'react-icons/fa';

const Content = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full p-2 md:p-36 flex flex-col items-center justify-center">
      <div className="flex flex-col w-full md:w-1/3">
        <div className="flex gap-4 mb-4">
          <img
            className="rounded-full shadow-lg size-16 md:size-24 object-cover"
            src={profilepic}
            alt="Luis Aguilar"
          />
          <a
            href="https://linkedin.com/in/luisgerardoaguilar"
            target="_blank"
            rel="noopener"
            className="flex items-center transition md:justify-center md:hover:scale-105"
          >
            <div className="flex items-center ">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                <div className="inline-flex items-center justify-center w-full px-3 py-1 text-xs md:text-sm text-white rounded-full cursor-pointer bg-[#08344d] backdrop-blur-3xl whitespace-nowrap">
                  {t('head.ready')}
                </div>
              </span>
            </div>
          </a>
        </div>
        <div>
          <span className="Content_NameTyped">{t('head.hi')}</span>
          <div className="SubText">
            <div className="Content_text">
              <p className="Content_text text-xs md:text-base">
                <span>{t('head.first')}</span>
                <span className="emoji">🇨🇴</span>
                <span>{t('head.second')}</span>
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-4 mt-8 text-xs md:text-md">
            <a
              href="mailto:luisgerardo900@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              role="link"
              className={`inline-flex items-center justify-center gap-2 px-4 py-1 transition border
                rounded-full bg-[#08344d] border-gray-600 text-white 
                 text-md hover:border-gray-300 
                 hover:text-[#3b8686] group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white
                  focus-visible:ring-offset-2 active:bg-black`}
            >
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
                <path d="M3 6l9 6l9 -6"></path>
                <path d="M15 18h6"></path>
                <path d="M18 15l3 3l-3 3"></path>
              </svg>
              {t('head.contact')}
            </a>
            <a
              href="https://linkedin.com/in/luisgerardoaguilar"
              target="_blank"
              rel="noopener noreferrer"
              role="link"
              className={`inline-flex items-center justify-center gap-2 px-4 py-1 transition border
                rounded-full bg-[#08344d] border-gray-600 text-white 
                 text-md hover:border-gray-300 
                 hover:text-[#3b8686] group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white
                  focus-visible:ring-offset-2 active:bg-black`}
            >
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
              LinkedIn
            </a>
            <a
              href={'/LUISAGUILARCV.pdf'}
              download="Luis_Aguilar_CV"
              target="_blank"
              rel="noopener noreferrer"
              role="link"
              className={`inline-flex items-center justify-center gap-2 px-4 py-1 transition border
                rounded-full bg-[#08344d] border-gray-600 text-white 
                 text-md hover:border-gray-300 
                 hover:text-[#3b8686] group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white
                  focus-visible:ring-offset-2 active:bg-black`}
            >
              <FaFileDownload />
              {t('head.get_cv')}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Content;

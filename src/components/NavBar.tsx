import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants';

const NavBar = () => {
  const { i18n, t } = useTranslation();
  const scroll = (text: string) => {
    const id = '#';
    const selector = id + text;
    const section = document.querySelector(selector);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  };
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    e.target.blur();
  };
  return (
    <div className="NavBar_Container px-1 py-4">
      <div className="flex w-full items-center justify-center">
        <ul className="flex items-center justify-center NavBar_letters text-xs sm:text-sm md:text-xl text-center">
          <li onClick={() => scroll('experience')}>
            {t('nav.experience')}
          </li>
          <li onClick={() => scroll('tech_skill')}>
            {t('nav.tech_skill')}
          </li>
          <li onClick={() => scroll('about')}>
            {t('nav.about')}
          </li>
          <li
            onClick={() =>
              (window.location.href = 'mailto:luisgerardo900@gmail.com')
            }
          >
            {t('nav.contact')}
          </li>
          <select className="emoji bg-[#08344d] cursor-pointer" onChange={onChangeLang}>
            {LANGUAGES.map(
              ({
                code,
                label,
                codepoints,
              }: {
                code: string;
                label: string;
                codepoints: number[];
              }) => (
                <option key={label} value={code}>
                  {label} {String.fromCodePoint(...codepoints)}
                </option>
              ),
            )}
          </select>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

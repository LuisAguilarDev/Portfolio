import { useTranslation } from 'react-i18next';
import Section from './Section';

export default function Aboutme() {
  const { t } = useTranslation();
  return (
    <Section title={t('about.title')} id="about">
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-[65ch] text-white">
          <p>{t('about.content1')}</p>
          <br />
          <p>{t('about.content2')}</p>
          <br />
          <p>{t('about.content3')}</p>
          <br />
          <p>
            <p>{t('about.content4')}</p>
          </p>
        </div>
      </div>
    </Section>
  );
}

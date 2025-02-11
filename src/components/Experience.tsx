import { useTranslation } from 'react-i18next';
import Section from './Section';

export default function Experience() {
  const { t } = useTranslation();
  return (
    <Section id="experience" title={t('work.title')}>
      <>
        <ol className="mt-16">
          <li className="">
            <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
              <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-0">
                  <span className="text-green-400 -left-[42px] absolute rounded-full text-5xl">
                    •
                  </span>
                  <h3 className="text-xl font-bold text-green-400">
                    Full Stack Developer
                  </h3>
                  <h4 className="font-semibold text-xl text-white">
                    Prexto Financial Services
                  </h4>
                  <time className="p-0 m-0 text-sm text-white/80">
                    {t('work.month_1')}
                  </time>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-white/90 md:col-span-3">
                {t('work.brief_1')}
              </div>
            </div>
          </li>
          <li className="">
            <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
              <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-0">
                  <span className="text-green-400 -left-[42px] absolute rounded-full text-5xl">
                    •
                  </span>
                  <h3 className="text-xl font-bold text-green-400">
                    Desarrollador de software
                  </h3>
                  <h4 className="font-semibold text-xl text-white">
                    Sistemas Infotec
                  </h4>
                  <time className="p-0 m-0 text-sm text-white/80">
                    {t('work.month_2')}
                  </time>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-white/90 md:col-span-3">
                {t('work.brief_2')}
              </div>
            </div>
          </li>
          <li className="">
            <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
              <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-0">
                  <span className="text-green-400 -left-[42px] absolute rounded-full text-5xl">
                    •
                  </span>
                  <h3 className="text-xl font-bold text-green-400">
                    Financial Planning Analyst
                  </h3>
                  <h4 className="font-semibold text-xl text-white">
                    DDB Colombia
                  </h4>
                  <time className="p-0 m-0 text-sm text-white/80">
                    {t('work.month_3')}
                  </time>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-white/90 md:col-span-3">
                {t('work.brief_3')}
              </div>
            </div>
          </li>
        </ol>
      </>
    </Section>
  );
}

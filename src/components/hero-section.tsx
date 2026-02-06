import { useTranslation } from 'react-i18next';
import { colors } from '../theme';
import hero_bg from '../assets/hero_section_bg.png';

export function HeroSection() {
  const { t } = useTranslation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const titles = t('hero.title').split('/');

  return (
    <section id="home" className="min-h-screen flex items-center px-4 pt-24">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 items-center">
        {/* TEXT */}
        <div className="flex flex-col gap-6 text-center md:text-left md:col-span-2">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: colors.primary }}
          >
            {t('hero.eyebrow')}
          </span>

          <h1
            className="text-3xl md:text-4xl font-semibold leading-tight"
            style={{ color: colors.secondary }}
          >
            {titles[0]} <br />
            <span style={{ color: colors.primary }}>{titles[1]}</span>
          </h1>

          <p
            className="text-base leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ color: colors.secondary }}
          >
            {t('hero.description')}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <button
              className="px-6 py-3 rounded-md"
              style={{
                backgroundColor: colors.primary,
                color: colors.mutedText,
              }}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              {t('hero.cta_b1')}
            </button>

            <button
              className="px-6 py-3 border rounded-md"
              style={{ color: colors.primary, borderColor: colors.primary }}
              onClick={(e) => handleNavClick(e, '#about')}
            >
              {t('hero.cta_b2')}
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:col-span-3">
          <img
            src={hero_bg}
            alt="hero section illustration"
            className="w-full max-w"
          />
        </div>
      </div>
    </section>
  );
}

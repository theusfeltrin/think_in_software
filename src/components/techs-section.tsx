import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { colors } from '../theme';
import { useTranslation } from 'react-i18next';

// imports das logos
import go from '../assets/tech-logos/Go-Logo_Blue.png';
import css from '../assets/tech-logos/css.png';
import flutter from '../assets/tech-logos/flutter.png';
import html from '../assets/tech-logos/html.png';
import javascript from '../assets/tech-logos/javascript.png';
import mongodb from '../assets/tech-logos/mongodb.png';
import mysql from '../assets/tech-logos/mysql.png';
import nestjs from '../assets/tech-logos/nestjs.png';
import nextjs from '../assets/tech-logos/nextjs.png';
import nodejs from '../assets/tech-logos/nodejs.png';
import postgresql from '../assets/tech-logos/postgresql.png';
import python from '../assets/tech-logos/python-logo-master-v3-TM.png';
import reactNative from '../assets/tech-logos/react-native.png';
import reactjs from '../assets/tech-logos/reactjs.png';
import typescript from '../assets/tech-logos/typescript.png';
import docker from '../assets/tech-logos/docker-logo-blue.png';
import expo from '../assets/tech-logos/expo-logo-wordmark.png';

export const technologies = [
  { name: 'HTML', logo: html },
  { name: 'CSS', logo: css },
  { name: 'JavaScript', logo: javascript },
  { name: 'React.Js', logo: reactjs },
  { name: 'Next.Js', logo: nextjs },
  { name: 'TypeScript', logo: typescript },
  { name: 'Node.Js', logo: nodejs },
  { name: 'Nest.Js', logo: nestjs },
  { name: 'Go', logo: go },
  { name: 'Python', logo: python },
  { name: 'React Native', logo: reactNative },
  { name: 'Flutter', logo: flutter },
  { name: 'Expo', logo: expo },
  { name: 'Postgres', logo: postgresql },
  { name: 'MongoDB', logo: mongodb },
  { name: 'MySql', logo: mysql },
  { name: 'Docker', logo: docker },
];

export function TechSection() {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-16 md:py-30 overflow-hidden">
      <div
        className="max-w-6xl mx-auto px-4 py-12 md:px-8 md:py-16 rounded-xl md:rounded-2xl"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="text-center mb-10 md:mb-14">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: colors.primary }}
          >
            {t('tech.eyebrow')}
          </span>

          <h2
            className="mt-4 text-xl md:text-3xl font-semibold leading-tight max-w-3xl mx-auto"
            style={{ color: colors.secondary }}
          >
            {t('tech.title')}
          </h2>
        </div>

        <TechCarousel />
      </div>
    </section>
  );
}

function TechCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      centeredSlides
      slidesPerView={2}
      spaceBetween={32}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 5,
          spaceBetween: 48,
        },
      }}
      className="tech-carousel"
    >
      {technologies.map((tech) => (
        <SwiperSlide key={tech.name}>
          {({ isActive }) => (
            <div
              className={`
                flex items-center justify-center
                transition-all duration-500
                ${isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-90'}
              `}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="
                  h-30 md:h-20
                  w-auto object-contain
                  transition-opacity duration-300
                  hover:opacity-100
                "
                draggable={false}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

import { useTranslation } from 'react-i18next';
import { colors } from '../theme';
import { FaBrain, FaRocket, FaCubes, FaHandshake } from 'react-icons/fa6';
import { motion, type Variants } from 'framer-motion';

export function AboutSection() {
  const { t } = useTranslation();

  const titles = t('about.title').split('/');

  return (
    <section id="about" className="py-24 px-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: colors.primary }}
          >
            {t('about.eyebrow')}
          </span>

          <h2
            className="text-3xl md:text-4xl font-semibold leading-tight"
            style={{ color: colors.secondary }}
          >
            {titles[0]}
            <br />
            <span style={{ color: colors.primary }}>{titles[1]}</span>
          </h2>

          <span className="text-sm font-medium" style={{ color: colors.text }}>
            {t('about.subtitle')}
          </span>

          <p
            className="text-base leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ color: colors.text }}
          >
            {t('about.paragraph1')}
          </p>

          <p
            className="text-base leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ color: colors.text }}
          >
            {t('about.paragraph2')}
          </p>
        </div>

        {/* CARDS */}
        <AboutCards />
      </div>
    </section>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 48,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: index * 0.2,
    },
  }),
};

function AboutCards() {
  const { t } = useTranslation();

  const cards = t('about.cards', {
    returnObjects: true,
  }) as string[];
  const icons = [FaBrain, FaRocket, FaCubes, FaHandshake];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col gap-6"
    >
      {cards.map((item, index) => {
        const Icon = icons[index];

        return (
          <motion.div
            key={item}
            custom={index}
            variants={cardVariants}
            className="
              flex items-center gap-3 p-6
              rounded-2xl text-base font-medium
              shadow-sm transition-all
              hover:-translate-y-1 hover:shadow-lg
            "
            style={{
              backgroundColor: colors.primary,
              color: colors.mutedText,
              transform:
                typeof window !== 'undefined' && window.innerWidth >= 768
                  ? `translateX(${index * 1.25}rem)`
                  : 'none',
            }}
          >
            {Icon && <Icon className="text-lg shrink-0 opacity-90" />}
            <span>{item}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

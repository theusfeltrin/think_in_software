import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { colors } from '../theme';
import { type IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiGo,
  SiPython,
  SiFlutter,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
} from 'react-icons/si';

type Tech = {
  name: string;
  tKey: string;
  Icon: IconType;
};

const technologies: Tech[] = [
  { name: 'HTML', tKey: 'tech.html', Icon: SiHtml5 },
  { name: 'CSS', tKey: 'tech.css', Icon: SiCss3 },
  { name: 'JavaScript', tKey: 'tech.javascript', Icon: SiJavascript },
  { name: 'React.Js', tKey: 'tech.react', Icon: SiReact },
  { name: 'Next.Js', tKey: 'tech.nextjs', Icon: SiNextdotjs },
  { name: 'Node.Js', tKey: 'tech.node', Icon: SiNodedotjs },
  { name: 'Nest.Js', tKey: 'tech.nest', Icon: SiNestjs },
  { name: 'Go', tKey: 'tech.go', Icon: SiGo },
  { name: 'Python', tKey: 'tech.python', Icon: SiPython },
  { name: 'React Native', tKey: 'tech.reactNative', Icon: SiReact },
  { name: 'Flutter', tKey: 'tech.flutter', Icon: SiFlutter },
  { name: 'Postgres', tKey: 'tech.postgres', Icon: SiPostgresql },
  { name: 'MongoDB', tKey: 'tech.mongodb', Icon: SiMongodb },
  { name: 'MySql', tKey: 'tech.mysql', Icon: SiMysql },
  { name: 'Docker', tKey: 'tech.docker', Icon: SiDocker },
];

export function TechGridSection() {
  const { t } = useTranslation();

  return (
    <section id="tecnologies" className="py-20 px-4">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="text-center max-w-xl mx-auto mb-12">
          <span
            className="text-base uppercase tracking-widest"
            style={{ color: colors.primary }}
          >
            {t('tech.eyebrow')}
          </span>

          <h2
            className="text-2xl md:text-3xl font-semibold mt-4"
            style={{ color: colors.secondary }}
          >
            {t('tech.title')}
          </h2>

          <p className="text-sm mt-4" style={{ color: colors.muted }}>
            {t('tech.subtitle')}
          </p>
        </header>

        <TechGrid />
      </div>
    </section>
  );
}

function TechGrid() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {technologies.map((tech) => (
        <TechCard
          key={tech.tKey}
          tech={tech}
          isActive={active === tech.tKey}
          onToggle={() =>
            setActive((v) => (v === tech.tKey ? null : tech.tKey))
          }
        />
      ))}
    </div>
  );
}

type Props = {
  tech: Tech;
  isActive: boolean;
  onToggle: () => void;
};

function TechCard({ tech, isActive, onToggle }: Props) {
  const { t } = useTranslation();
  const label = t(`${tech.tKey}.name`, { defaultValue: tech.name });
  const description = t(`${tech.tKey}.description`, { defaultValue: '' });

  return (
    <button
      onClick={onToggle}
      className="relative w-full h-36 md:h-40 focus:outline-none"
      aria-label={label}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{ rotateY: isActive ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Frente */}
        <div
          className="absolute inset-0 flex items-center justify-center flex-col gap-2 rounded-2xl"
          style={{
            backfaceVisibility: 'hidden',
            backgroundColor: colors.primary,
          }}
        >
          <tech.Icon
            className="w-10 h-10 md:w-14 md:h-14 opacity-90"
            style={{ color: colors.bg }}
            aria-hidden="true"
          />
          <span style={{ color: colors.bg }}>{tech.name}</span>
        </div>

        {/* Verso */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 rounded-2xl border-2"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            backgroundColor: colors.bg,
            borderColor: colors.primary,
            color: colors.text,
          }}
        >
          <motion.strong
            className="text-sm md:text-base"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 6 }}
            transition={{ delay: 0.25 }}
          >
            {label}
          </motion.strong>

          {description && (
            <motion.p
              className="text-xs md:text-sm opacity-90 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ delay: 0.35 }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </motion.div>
    </button>
  );
}

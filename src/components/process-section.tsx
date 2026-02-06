import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { colors } from '../theme/colors';

type Step = {
  title: string;
  description: string;
};

const colStarts = [
  'md:col-start-1',
  'md:col-start-2',
  'md:col-start-3',
  'md:col-start-4',
  'md:col-start-5',
];

export function ProcessTimeline() {
  const { t } = useTranslation();

  const stepsArray = t('process.steps', { returnObjects: true }) as Step[];

  return (
    <section id="process" className="px-4 py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="text-base uppercase tracking-widest"
            style={{ color: colors.primary }}
          >
            {t('process.eyebrow')}
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold mt-4"
            style={{ color: colors.secondary }}
          >
            {t('process.title')}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-0 right-0 top-1/2 h-1 hidden md:block origin-left"
            style={{ backgroundColor: colors.primary }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-y-10 gap-x-0">
            {stepsArray.map((step, index) => {
              const isTop = [0, 2, 4].includes(index);

              return (
                <motion.div
                  key={step.title}
                  custom={isTop ? 'up' : 'down'}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className={`
                    relative p-6 rounded-2xl shadow-md
                    col-span-1 row-span-1
                    ${isTop ? 'md:row-start-1 ' : 'md:row-start-2'}
                    ${colStarts[index]}
                  `}
                  style={{ backgroundColor: colors.bg }}
                >
                  {/* Conector */}
                  <span
                    className={`
                      absolute left-1/2 -translate-x-1/2 h-5 w-1
                      ${isTop ? '-bottom-5' : '-top-5'}
                      hidden md:block
                    `}
                    style={{ backgroundColor: colors.primary }}
                  />
                  <h3
                    className="font-semibold"
                    style={{ color: colors.secondary }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: colors.text }}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const cardVariants: Variants = {
  hidden: (direction: 'up' | 'down') => ({
    opacity: 0,
    y: direction === 'up' ? -32 : 32,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
};

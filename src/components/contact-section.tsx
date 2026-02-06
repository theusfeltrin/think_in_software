import { FaWhatsapp, FaInstagram } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { colors } from '../theme/colors';

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-4">
      <div
        className="max-w-6xl mx-auto rounded-3xl px-6 py-16"
        style={{ backgroundColor: colors.bg }}
      >
        <header className="text-center max-w-xl mx-auto mb-16">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: colors.primary }}
          >
            {t('contact.eyebrow')}
          </span>

          <h2
            className="text-2xl md:text-3xl font-semibold mt-4"
            style={{ color: colors.secondary }}
          >
            {t('contact.title')}
          </h2>

          <p className="text-sm text-gray-500 mt-4">{t('contact.subtitle')}</p>
        </header>

        <div className="grid gap-12 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { t } = useTranslation();

  return (
    <form className="flex flex-col gap-4">
      <Input placeholder={t('contact.form.name')} />
      <Input type="email" placeholder={t('contact.form.email')} />
      <Input placeholder={t('contact.form.phone')} />
      <Textarea placeholder={t('contact.form.message')} />

      <button
        type="submit"
        className="mt-4 py-3 rounded-md font-medium transition"
        style={{
          backgroundColor: colors.primary,
          color: colors.mutedText,
        }}
      >
        {t('contact.form.submit')}
      </button>
    </form>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-md px-4 py-3 text-sm border focus:outline-none focus:ring-2"
      style={{
        borderColor: colors.border,
        backgroundColor: 'white',
      }}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={4}
      className="w-full rounded-md px-4 py-3 text-sm border resize-none focus:outline-none focus:ring-2"
      style={{
        borderColor: colors.border,
        backgroundColor: 'white',
      }}
    />
  );
}

function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl p-6 border">
        <p className="font-medium mb-4" style={{ color: colors.secondary }}>
          {t('contact.channels')}
        </p>

        <div className="flex flex-col gap-4">
          <SocialLink
            icon={<FaWhatsapp size={20} />}
            label="WhatsApp"
            value="+55 11 99999-9999"
          />

          <SocialLink
            icon={<FaInstagram size={20} />}
            label="Instagram"
            value="@thinkinsoftware"
          />
        </div>
      </div>

      <div className="rounded-2xl p-6 border text-sm text-gray-600">
        <strong className="block mb-2">{t('contact.hours.title')}</strong>
        <p>{t('contact.hours.value')}</p>
      </div>
    </div>
  );
}

function SocialLink({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="p-3 rounded-full"
        style={{ backgroundColor: colors.primary, color: colors.mutedText }}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-gray-500">{value}</p>
      </div>
    </div>
  );
}

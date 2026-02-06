import { useEffect, useState } from 'react';
import { FaList, FaX } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

import logo from '../assets/tis_logo_column.png';
import { colors } from '../theme/colors';

export function Navigation() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsFloating(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.process'), href: '#process' },
    { label: t('nav.tecnologies'), href: '#tecnologies' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`
        z-50 transition-all duration-500
        ${isFloating ? 'fixed top-0 inset-x-0 px-4 py-4' : 'relative w-full pt-4'}
      `}
      style={{ backgroundColor: isFloating ? colors.bg : 'transparent' }}
      aria-label="Navegação principal"
    >
      {/* ===== Desktop (>= md) ===== */}
      <div
        className={`hidden md:grid max-w-7xl mx-auto h-16 grid-cols-[auto_1fr_auto] items-center gap-4 px-4`}
      >
        {/* Logo — sem fundo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center"
          aria-label="Ir ao topo"
        >
          <img
            src={logo}
            alt="TIS Logo"
            className="h-10 w-auto"
            draggable={false}
          />
        </a>

        {/* Menu central — ÚNICO com pill branco */}
        <nav className="flex justify-center">
          <div
            className={`
              flex items-center gap-10 backdrop-blur-md
              rounded-full
              px-8 py-3
              transition-all duration-300
            `}
            style={{ backgroundColor: isFloating ? 'transparent' : colors.bg }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-medium transition-colors"
                style={{ color: colors.secondary }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.primary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.secondary)
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Botão Contato */}
        <div
          className="flex justify-end rounded-full px-8 py-3"
          style={{ backgroundColor: colors.primary, color: colors.mutedText }}
          onMouseEnter={(e) => (e.currentTarget.style.color = colors.secondary)}
          onMouseLeave={(e) => (e.currentTarget.style.color = colors.mutedText)}
        >
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center font-semibold text-base transition-colors"
          >
            {t('nav.contact')}
          </a>
        </div>
      </div>

      {/* ===== Mobile (< md): logo esquerda, contato centro, menu sanduíche direita ===== */}
      <div
        className={`
          md:hidden
          max-w-7xl mx-auto
          ${isFloating ? '' : 'px-4'}
        `}
      >
        <div className="grid grid-cols-3 items-center h-14">
          {/* Esquerda: Logo (sem fundo) */}
          <div className="flex items-center">
            <img src={logo} alt="TIS Logo" className="h-7 w-auto" />
          </div>

          {/* Centro: Contato (sem fundo) */}
          <div className="flex justify-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="font-semibold text-sm transition-colors rounded-full px-4 py-2"
              style={{
                backgroundColor: colors.primary,
                color: colors.mutedText,
              }}
            >
              Contato
            </a>
          </div>

          {/* Direita: sanduíche (sem fundo) */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="p-2 rounded-full"
              style={{ color: colors.muted }}
            >
              {isMenuOpen ? <FaX size={18} /> : <FaList size={18} />}
            </button>
          </div>
        </div>

        {/* Dropdown mobile */}
        {isMenuOpen && (
          <div
            className="mt-2 rounded-2xl backdrop-blur border shadow-lg overflow-hidden mb-4"
            style={{ backgroundColor: colors.bg, borderColor: colors.border }}
          >
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-5 py-3 text-sm"
                style={{
                  color: colors.muted,
                  borderBottom:
                    index < navItems.length - 1
                      ? '1px solid ' + colors.border
                      : 'none',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
``;

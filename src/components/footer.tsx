import { colors } from '../theme/colors';

export function Footer() {
  return (
    <footer className="my-6">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-xl"
          style={{ backgroundColor: colors.primary }}
        >
          <div className="text-base">
            <span style={{ color: colors.mutedText }}>
              Built with React, TypeScript & Tailwind CSS
            </span>
          </div>

          <div
            className="font-mono text-base"
            style={{ color: colors.mutedText }}
          >
            © {new Date().getFullYear()} Think In Software. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

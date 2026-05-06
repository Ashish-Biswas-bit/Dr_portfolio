import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'medical-white': '#FAFBFC',
        'medical-blue': '#2563EB',
        'medical-teal': '#0D9488',
        'medical-gray': '#64748B',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 60px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'hero-soft': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.16), transparent 35%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.12), transparent 18%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

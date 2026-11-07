import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        devanagari: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFDFB',
          100: '#FBFBF9',
          200: '#F5F5F0',
          300: '#EBEBE5',
          400: '#DEDECF',
        },
        sage: {
          50: '#F2F7F0',
          100: '#E4EFE0',
          200: '#C8DEBF',
          500: '#528347',
          700: '#2E5A27',
          800: '#23441E',
          900: '#172E14',
        },
        ink: {
          400: '#9AA3AF',
          500: '#6E7A87',
          600: '#525C67',
          700: '#333A42',
          800: '#1F2429',
          900: '#111518',
        },
        deepnavy: {
          700: '#233A50',
          800: '#162737',
          850: '#0F1E2C',
          900: '#0B151F',
        },
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc7fc",
          400: "#38a9f8",
          500: "#0e8de9",
          600: "#026fc7",
          700: "#0358a1",
          800: "#074b85",
          900: "#0c3f6e",
          950: "#072849",
        },
        gold: {
          400: "#f6c445",
          500: "#eab308",
          600: "#ca8a04",
        },
      },
    },
  },
  plugins: [],
};

export default config;

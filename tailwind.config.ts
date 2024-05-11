import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#0FFC76',
        'contrast-green': '#46A31D',
        'second-green': '#1EA358',
        'second-green-hover': '#238E5B',
        'backgrond-color': '#F8F8F8'
      },
      fontFamily: {
        mont: ['Mont', 'Arial'],
      },
    },
  },
  plugins: [],
};
export default config;

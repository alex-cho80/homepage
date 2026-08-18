import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "connectx-navy": "#0f172a",
        "connectx-accent": "#0ea5e9",
      },
    },
  },
  plugins: [],
};

export default config;

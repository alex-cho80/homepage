import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "connectx-navy": "#0b1d3a",
        "connectx-blue": "#0052ff",
        "connectx-teal": "#00c2c2",
      },
    },
  },
  plugins: [],
};

export default config;

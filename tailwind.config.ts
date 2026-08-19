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
        "cx-bg": "#050714",
        "cx-bg-alt": "#0a0d28",
        "cx-card": "#11142f",
        "cx-border": "#1d234a",
        "cx-muted": "#94a3b8",
        "cx-dim": "#64748b",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "var(--font-noto-kr)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

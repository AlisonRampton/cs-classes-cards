import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "highlight-color": "#97FEED",
        //"emphasis-color": "#0E479C",
        // "emphasis-color-hover": "#484FDA",
        // "emphasis-color-active": "#726FE5",
        //"core-elect-color": "#0B666A",
        //"card-color": "#35A29F",
        //dark: {
        //  "emphasis-color": "#0",
        //},
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

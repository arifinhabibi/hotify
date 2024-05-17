import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          text: "#000000",
          // other light mode colors
        },
        dark: {
          background: "#1a202c",
          text: "#ffffff",
          // other dark mode colors
        },
        BG: "#F2F6FC",
        primary: {
          DEFAULT: "#00582F",
          "200": "#C5FFE4",
          "300": "#A0FFD3",
          "400": "#7BFFC2",
          "500": "#56FFB0",
          "600": "#30FC9D",
          "700": "#14D37A",
          "800": "#00AA5B",
          "900": "#008145",
          "1000": "#00582F",
        },
        neutral: {
          DEFAULT: "#3B3C3D",
          "200": "#E1E1E1",
          "300": "#CCCCCC",
          "400": "#B8B8B8",
          "500": "#A3A3A3",
          "600": "#8F8F8F",
          "700": "#7B7B7B",
          "800": "#666666",
          "900": "#505152",
          "1000": "#3B3C3D",
        },
      },
      screens: {
        mobile: "640px",
        tab: "768px",
      },
      fontFamily: {
        // Define custom font families
        sans: ["Sora", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Inconsolata", "monospace"],
        // Add more custom font families as needed...
      },
    },
  },
  plugins: [],
};
export default config;

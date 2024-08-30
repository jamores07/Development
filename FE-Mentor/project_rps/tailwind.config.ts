import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      extend: {
        screens: {
          mobile: { min: "370px", max: "640px" },
          mobile2: { min: "370px", max: "460px" },
        },
        scale: {
          25: "0.25",
          40: "0.40",
          35: "0.35",
        },
      },
    },
  },
  plugins: [],
};
export default config;

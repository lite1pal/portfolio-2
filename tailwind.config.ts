import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      cursor: {
        default:
          // "url(http://www.rw-designer.com/cursor-extern.php?id=154891), default",
          "url(/green_cursor.cur), default",
      },
      colors: {
        primary: "rgb(5 150 105)",
        "primary-dark": "rgb(52 211 153)",
      },
    },
  },
  darkMode: "class",
  plugins: [typography],
};
export default config;

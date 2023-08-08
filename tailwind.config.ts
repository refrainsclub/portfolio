import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.zinc,
          750: "#333338",
          850: "#202023",
          950: "#0C0C0E",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

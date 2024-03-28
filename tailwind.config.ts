import { type Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  plugins: [Typography],
} satisfies Config;

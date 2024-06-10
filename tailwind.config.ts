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
        content_bg: "#F0F0F0",
      },
      backgroundImage: {
        "custom-bg": "url('/bg-login.svg')",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#e7816b"
      },
      backgroundImage: {
        "hero-pattern-home": "url('./home/desktop/bg-pattern-hero-home.svg')"
      }
    }
  },
  plugins: []
} satisfies Config;

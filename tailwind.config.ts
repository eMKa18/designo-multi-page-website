import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#e7816b"
      },
      backgroundImage: {
        "hero-pattern-home": "url('/home/desktop/bg-pattern-hero-home.svg')",
        "hero-pattern-leaf": "url('/shared/desktop/bg-pattern-leaf.svg')",
        "hero-pattern-small-circle":
          "url('/shared/desktop/bg-pattern-small-circle.svg')",
        "hero-pattern-three-circles":
          "url('/shared/desktop/bg-pattern-three-circles.svg')",
        "hero-pattern-two-circles":
          "url('/shared/desktop/bg-pattern-two-circles.svg')",
        "hero-pattern-call-to-action":
          "url('/shared/desktop/bg-pattern-call-to-action.svg')"
      }
    }
  },
  plugins: []
} satisfies Config;

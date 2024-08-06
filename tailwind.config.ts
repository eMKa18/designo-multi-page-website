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
          "url('/shared/desktop/bg-pattern-call-to-action.svg')",
        "hero-pattern-intro-web":
          "url('/web-design/desktop/bg-pattern-intro-web.svg')"
      },
      keyframes: {
        moveRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100%)" }
        },
        moveLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-100%)" }
        },
        moveAndDisappear: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "50%": { transform: "translateX(100%)", opacity: "0" },
          "51%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        }
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out infinite",
        moveLeft: "moveLeft 1s ease-in-out infinite",
        moveAndDisappear: "moveAndDisappear 2s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;

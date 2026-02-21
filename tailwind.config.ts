import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "dark-gray": "#111",
        white: "#fff",
        "light-gray": "#424242",
        "accent-orange": "#f83200",
        "medium-gray": "#666",
        "dark-charcoal": "#494949",
        "neutral-gray": "#999",
        "success-green": "#40ce03"
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      }
    }
  },
  plugins: []
}

export default config

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05070b",
        panel: "#0c1425",
        panelElevated: "#111c32",
        borderSubtle: "#17263d",
        borderDefault: "#24344e",
        borderStrong: "#314768",
        glow: "#2f6fff",
        accent: "#67e8f9",
        text: "#f5f7ff",
        textSecondary: "#a8b5cf",
        textMuted: "#7b89a8"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(47,111,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(47,111,255,0.12) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

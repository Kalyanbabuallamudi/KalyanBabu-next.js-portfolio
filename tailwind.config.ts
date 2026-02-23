import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Figma blue 600
        secondary: '#6366f1', // Figma indigo 500
        accent: '#f59e42', // Figma orange 400
        neutral: '#334155', // Figma slate 700
        background: '#f8fafc', // Figma gray 50
        surface: '#ffffff', // Card/Surface
        muted: '#e5e7eb', // Muted backgrounds
        success: '#22c55e', // Green 500
        warning: '#facc15', // Yellow 400
        error: '#ef4444', // Red 500
        info: '#0ea5e9', // Sky 500
        dark: '#0f172a', // Slate 900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
export default config;

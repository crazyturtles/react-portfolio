/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          dark: "#60a5fa"
        },
        secondary: {
          DEFAULT: "#475569",
          dark: "#94a3b8"
        },
        accent: {
          DEFAULT: "#f59e0b",
          dark: "#8b5cf6"
        },
        surface: {
          DEFAULT: "#ffffff",
          dark: "#1e293b"
        },
        background: {
          DEFAULT: "#ffffff",
          dark: "#0f172a"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        section: "80px",
        hero: "calc(100vh - 64px)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            h1: {
              fontFamily: "Poppins, sans-serif",
              fontWeight: "700",
            },
            h2: {
              fontFamily: "Poppins, sans-serif",
              fontWeight: "700",
            },
            h3: {
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            },
            a: {
              color: "#2563eb",
              "&:hover": {
                color: "#1d4ed8",
              },
            },
          },
        },
        dark: {
          css: {
            color: "#94a3b8",
            a: {
              color: "#60a5fa",
              "&:hover": {
                color: "#3b82f6",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
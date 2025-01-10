/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#475569",
        accent: "#f59e0b",
        'primary-dark': "#6ee7b7",
        'secondary-dark': "#94a3b8",
        'accent-dark': "#c084fc",
        'background-dark': "#030712",
        'surface-dark': "#111827"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        'sans-dark': ["Albert Sans", "sans-serif"],
        'heading-dark': ["Instrument Sans", "sans-serif"]
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
        invert: {
          css: {
            h1: {
              fontFamily: "Instrument Sans, sans-serif",
            },
            h2: {
              fontFamily: "Instrument Sans, sans-serif",
            },
            h3: {
              fontFamily: "Instrument Sans, sans-serif",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
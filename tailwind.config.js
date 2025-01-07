/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#2563eb",
				secondary: "#475569",
				accent: "#f59e0b",
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
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
	components: {
		'.section-heading': 'mb-12 text-center font-heading text-4xl font-bold text-primary',
	}
};

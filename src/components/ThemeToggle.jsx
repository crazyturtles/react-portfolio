import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setDarkMode(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleTheme = () => {
		if (darkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		} else {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		}
		setDarkMode(!darkMode);
	};

	return (
		<button
			onClick={toggleTheme}
			className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-surface-dark"
			aria-label="Toggle dark mode"
			type="button"
		>
			{darkMode ? (
				<Sun className="h-5 w-5 text-primary dark:text-primary-dark" />
			) : (
				<Moon className="h-5 w-5 text-primary dark:text-primary-dark" />
			)}
		</button>
	);
};

export default ThemeToggle;
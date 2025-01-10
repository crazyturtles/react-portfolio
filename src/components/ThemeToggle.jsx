import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const containerRef = useRef(null);

	const createBlocks = () => {
		const container = containerRef.current;
		container.innerHTML = "";
		const blockSize = 100;
		const cols = Math.ceil(window.innerWidth / blockSize);
		const rows = Math.ceil(window.innerHeight / blockSize);

		const blocks = [];
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				const block = document.createElement("div");
				const delay = Math.random() * 1000;
				const rotationType = Math.random() < 0.5 ? "X" : "Y";
				const rotationDirection = Math.random() < 0.5 ? "" : "-";

				Object.assign(block.style, {
					position: "absolute",
					width: `${blockSize}px`,
					height: `${blockSize}px`,
					left: `${j * blockSize}px`,
					top: `${i * blockSize}px`,
					backgroundColor: darkMode ? "#030712" : "#ffffff",
					transform: "rotate(0deg)",
					transition: `transform 1s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
					transformStyle: "preserve-3d",
				});

				// Create and append the front face
				const front = document.createElement("div");
				Object.assign(front.style, {
					position: "absolute",
					width: "100%",
					height: "100%",
					backgroundColor: darkMode ? "#030712" : "#ffffff",
					backfaceVisibility: "hidden",
				});
				block.appendChild(front);

				// Create and append the back face
				const back = document.createElement("div");
				Object.assign(back.style, {
					position: "absolute",
					width: "100%",
					height: "100%",
					backgroundColor: darkMode ? "#ffffff" : "#030712",
					backfaceVisibility: "hidden",
					transform: "rotateY(180deg)",
				});
				block.appendChild(back);

				container.appendChild(block);
				blocks.push({
					element: block,
					rotationType,
					rotationDirection,
				});
			}
		}

		setTimeout(() => {
			blocks.forEach(({ element, rotationType, rotationDirection }) => {
				element.style.transform = `rotate${rotationType}(${rotationDirection}180deg)`;
			});
		}, 0);

		return 4000;
	};

	const toggleTheme = () => {
		if (isAnimating) return;
		setIsAnimating(true);

		const duration = createBlocks();

		setTimeout(() => {
			if (darkMode) {
				document.documentElement.classList.remove("dark");
				localStorage.theme = "light";
			} else {
				document.documentElement.classList.add("dark");
				localStorage.theme = "dark";
			}
			setDarkMode(!darkMode);
			setIsAnimating(false);
			containerRef.current.innerHTML = "";
		}, duration / 2);
	};

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

	return (
		<>
			<div
				ref={containerRef}
				className="fixed inset-0 pointer-events-none"
				style={{
					zIndex: 40,
					perspective: "1000px",
					transformStyle: "preserve-3d",
				}}
			/>
			<button
				onClick={toggleTheme}
				className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-surface-dark relative z-50"
				aria-label="Toggle dark mode"
				type="button"
				disabled={isAnimating}
			>
				{darkMode ? (
					<Sun className="h-5 w-5 text-primary dark:text-primary-dark" />
				) : (
					<Moon className="h-5 w-5 text-primary dark:text-primary-dark" />
				)}
			</button>
		</>
	);
};

export default ThemeToggle;
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Manual from "./components/manual";
import Projects from "./components/projects";
import Skills from "./components/skills";
import ThemeToggle from "./components/ThemeToggle";

const MainLayout = () => (
	<main className="min-h-screen bg-background dark:bg-background-dark transition-colors duration-200">
		<nav className="fixed top-0 z-50 w-full bg-background/80 dark:bg-background-dark/80 px-4 py-4 backdrop-blur">
			<div className="container mx-auto flex items-center justify-between">
				<span className="font-heading dark:font-heading-dark text-xl font-bold text-primary dark:text-primary-dark select-none">
					<Link to="/" onClick={() => window.scrollTo(0, 0)}>
						Rohan Matharu
					</Link>
				</span>
				<div className="flex items-center space-x-6">
					{["Projects", "Skills", "Contact"].map((item) => (
						<button
							key={item}
							onClick={() => {
								document
									.getElementById(item.toLowerCase())
									?.scrollIntoView({ behavior: "smooth" });
							}}
							className="font-sans dark:font-sans-dark text-secondary dark:text-secondary-dark transition-colors hover:text-primary dark:hover:text-primary-dark select-none"
							type="button"
						>
							{item}
						</button>
					))}
					<ThemeToggle />
				</div>
			</div>
		</nav>

		<div className="pt-16">
			<Hero />
			<Projects />
			<Skills />
			<Contact />
		</div>
	</main>
);

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainLayout />} />
				<Route path="/manuals/:projectId" element={<Manual />} />
			</Routes>
		</Router>
	);
};

export default App;

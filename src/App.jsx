import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Manual from "./components/manual";
import Projects from "./components/projects";
import Skills from "./components/skills";

const MainLayout = () => (
	<main className="min-h-screen bg-white">
		<nav className="fixed top-0 z-50 w-full bg-white/80 px-4 py-4 backdrop-blur">
			<div className="container mx-auto flex items-center justify-between">
				<span className="font-heading text-xl font-bold text-primary select-none">
					<Link to="/" onClick={() => window.scrollTo(0, 0)}>
						Rohan Matharu
					</Link>
				</span>
				<div className="space-x-6">
					{["Projects", "Skills", "Contact"].map((item) => (
						<button
							key={item}
							onClick={() => {
								document
									.getElementById(item.toLowerCase())
									?.scrollIntoView({ behavior: "smooth" });
							}}
							className="text-secondary transition-colors hover:text-primary select-none"
							type="button"
						>
							{item}
						</button>
					))}
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

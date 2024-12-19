import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Manual from "./components/Manual";

const MainLayout = () => (
	<main className="min-h-screen bg-white">
		<nav className="fixed top-0 z-50 w-full bg-white/80 px-4 py-4 backdrop-blur">
			<div className="container mx-auto flex items-center justify-between">
				<span className="font-heading text-xl font-bold text-primary">
					Rohan Matharu
				</span>
				<div className="space-x-6">
					{["Projects", "Skills", "Contact"].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="text-secondary transition-colors hover:text-primary"
						>
							{item}
						</a>
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

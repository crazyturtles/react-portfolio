import { ArrowDown } from "lucide-react";

const Hero = () => {
	const scrollToProjects = () => {
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="relative h-hero flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
			<div className="container mx-auto px-4">
				<div className="animate-fade-in space-y-6 text-center">
					<h1 className="font-heading text-5xl font-bold text-primary">
						Hi, I'm <span className="text-accent">Rohan Matharu</span>
					</h1>
					<p className="mx-auto max-w-2xl text-xl text-secondary">
						Full-stack developer specializing in modern web technologies
					</p>
				</div>
			</div>
			<button
				onClick={scrollToProjects}
				className="absolute bottom-8 left-8 z-40 flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white transition-all hover:bg-primary/90 shadow-lg"
				type="button"
			>
				View My Work
				<ArrowDown className="transition-transform group-hover:translate-y-1" />
			</button>
		</section>
	);
};

export default Hero;

import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
	{
		title: "PumpMaster V3",
		description:
			"A comprehensive web application for concrete pumping companies to manage daily operations, scheduling, and reporting. Features include job management, real-time scheduling, customer tracking, and detailed reporting systems.",
		tags: ["React", "Node.js", "SQL", "Jest", "TailwindCSS"],
		github: "https://github.com/crazyturtles/2024-Fall-PlanetCom-Sept-Dec-2024",
		manualPath: "pumpmaster",
	},
	{
		title: "Project Two",
		description: "Mobile-first e-commerce platform",
		tags: ["Next.js", "Tailwind", "Stripe"],
		github: "https://github.com/yourusername/project-two",
		live: "https://project-two.com",
	},
];

const Projects = () => {
	return (
		<section id="projects" className="py-section">
			<div className="container mx-auto px-4">
				<h2 className="mb-12 text-center font-heading text-4xl font-bold text-primary select-none">
					Featured Projects
				</h2>
				<div className="grid gap-8 md:grid-cols-2">
					{projects.map((project, index) => (
						<div
							key={project.title}
							className="group animate-slide-up rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl"
							style={{ animationDelay: `${index * 200}ms` }}
						>
							<h3 className="mb-2 font-heading text-2xl font-bold select-none">
								{project.title}
							</h3>
							<p className="mb-4 text-secondary select-none">
								{project.description}
							</p>
							<div className="mb-4 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent select-none"
									>
										{tag}
									</span>
								))}
							</div>
							<div className="flex gap-4">
								<a
									href={project.github}
									target="_blank"
									className="flex items-center gap-2 text-secondary transition-colors hover:text-primary select-none"
									rel="noreferrer"
								>
									<Github size={20} /> Code
								</a>
								{project.live && (
									<a
										href={project.live}
										target="_blank"
										className="flex items-center gap-2 text-secondary transition-colors hover:text-primary select-none"
										rel="noreferrer"
									>
										<ExternalLink size={20} /> Live Demo
									</a>
								)}
								{project.manualPath && (
									<Link
										to={`/manuals/${project.manualPath}`}
										className="flex items-center gap-2 text-secondary transition-colors hover:text-primary select-none"
									>
										<BookOpen size={20} /> View Manual
									</Link>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;

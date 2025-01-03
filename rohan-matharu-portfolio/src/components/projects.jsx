import { BookOpen, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectModal from "./ProjectModal";

const projects = [
	{
		title: "PumpMaster V3",
		description:
			"A comprehensive web application for concrete pumping companies to manage daily operations, scheduling, and reporting. Features include job management, real-time scheduling, customer tracking, and detailed reporting systems.",
		tags: ["React", "Node.js", "SQL", "Jest", "TailwindCSS"],
		github: "https://github.com/crazyturtles/2024-Fall-PlanetCom-Sept-Dec-2024",
		manualPath: "pumpmaster",
		introduction: `PumpMaster V3 is a cloud-based upgrade to PlanetCom's job listing and dispatch application. Developed for PlanetCom, a company with 22+ years in managed IT services, this version transforms the original on-premises desktop application into a modern web application.

The system serves administrators and dispatchers in concrete pumping companies, enabling them to manage jobs, track operators, and handle customer information efficiently.`,
		tasks: `- Desktop to Web Migration
  - Transformed on-premises application into cloud-ready webapp
  - Enabled remote accessibility

- Security Enhancements
  - Implemented user authentication system
  - Added role-based access controls
  - Integrated modern security protocols

- UI/UX Improvements
  - Redesigned interface for better workflow efficiency
  - Enhanced visual design and color scheme

- System Architecture
  - Built scalable architecture for future growth
  - Developed account management system
  - Streamlined feature integration with existing business tools`,
		reflections: `This project represented a significant modernization effort, building upon a system that had served as a cornerstone of operations for over two decades. The focus was on maintaining core functionality while introducing modern capabilities around scalability, security, and cloud accessibility.

The development prioritized seamless integration with existing business applications while streamlining features to focus on the most utilized functions.`,
	},
	{
		title: "Project Two",
		description: "Mobile-first e-commerce platform",
		tags: ["Next.js", "Tailwind", "Stripe"],
		github: "https://github.com/yourusername/project-two",
		live: "https://project-two.com",
		introduction: "",
		tasks: "",
		reflections: "",
	},
];

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(null);

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
							onClick={() => setSelectedProject(project)}
							onKeyDown={(e) => {
								if (e.key === "Enter") setSelectedProject(project);
							}}
							className="group animate-slide-up rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl cursor-pointer"
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
									onClick={(e) => e.stopPropagation()}
								>
									<Github size={20} /> Code
								</a>
								{project.live && (
									<a
										href={project.live}
										target="_blank"
										className="flex items-center gap-2 text-secondary transition-colors hover:text-primary select-none"
										rel="noreferrer"
										onClick={(e) => e.stopPropagation()}
									>
										<ExternalLink size={20} /> Live Demo
									</a>
								)}
								{project.manualPath && (
									<Link
										to={`/manuals/${project.manualPath}`}
										className="flex items-center gap-2 text-secondary transition-colors hover:text-primary select-none"
										onClick={(e) => e.stopPropagation()}
									>
										<BookOpen size={20} /> View Manual
									</Link>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			<ProjectModal
				project={selectedProject}
				projects={projects}
				isOpen={!!selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</section>
	);
};

export default Projects;

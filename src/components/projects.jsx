import { BookOpen, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectModal from "./ProjectModal";

const projects = [
	{
		title: "PumpMaster V3",
		description:
			"A comprehensive web application for concrete pumping companies to manage daily operations, scheduling, and reporting. Features include job management, real-time scheduling, customer tracking, and detailed reporting systems.",
		tags: ["React", "Node.js", "SQL", "Jest", "TailwindCSS", "BiomeJS"],
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
		title: "Man United Season Tracker",
		description:
			"A web application that tracks and manages Manchester United match data. Features include live match tracking, detailed statistics, comprehensive match histories, and an administrative system for data management.",
		tags: ["PHP", "MySQL", "Bootstrap"],
		github: "https://github.com/crazyturtles/catalogue-final-rohan-matharu",
		manualPath: "man-utd-season-tracker",
		introduction: `Man United Season Tracker is a comprehensive match tracking system that allows fans and administrators to monitor Manchester United's season performance. The system provides detailed insights into matches, team statistics, and formation details.

The application serves both general users who can view match histories and statistics, as well as administrators who can manage match records through a secure administrative interface.`,
		tasks: `- Match Management System
  - Implemented comprehensive match recording capabilities
  - Developed formation tracking with player positioning
  - Created statistical analysis features

- User Interface Development
  - Designed responsive match cards and detailed views
  - Built interactive formation displays
  - Implemented intuitive navigation systems

- Administrative Features
  - Created secure admin authentication system
  - Developed match CRUD operations
  - Implemented image upload and processing

- Data Management
  - Designed efficient database structure
  - Implemented data validation systems
  - Created secure data handling procedures`,
		reflections: `This project showcases the implementation of a sports-focused content management system that balances user accessibility with administrative functionality. The focus was on creating an intuitive interface while maintaining robust data management capabilities.

The development emphasized proper data structuring and validation while providing an engaging user experience for both viewers and administrators.`,
	},
	{
		title: "eBike Management System",
		description:
			"A Blazor-based inventory management system for eBike parts and service tracking. Features purchase order management, inventory control, vendor relationship management, and automated reordering capabilities.",
		tags: ["C#", "Blazor", "HTML", "CSS"],
		github: "https://github.com/crazyturtles/dmit-2018-final-project",
		manualPath: "ebike",
		introduction:
			"A comprehensive web application built with Blazor for managing eBike parts inventory, purchases, sales, and servicing. The system handles vendor relationships, purchase orders, and inventory tracking while providing a modern, responsive interface for staff operations.",
		tasks: `- Inventory Management
 - Implemented purchase order lifecycle
 - Created vendor management system
 - Developed inventory tracking

- Purchase Order System
 - Built automated reordering system
 - Added tax calculation features
 - Integrated order confirmation workflow

- Interface Development
 - Created responsive Blazor components
 - Implemented real-time updates
 - Built intuitive navigation system`,
		reflections:
			"This project demonstrates effective implementation of a business-critical inventory management system using Blazor. The focus was on creating an efficient and user-friendly interface while maintaining robust backend processing capabilities.",
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
								{project.github && (
									<a
										href={project.github}
										target="_blank"
										className="flex items-center gap-2 text-secondary transition-colors hover:text-primary select-none"
										rel="noreferrer"
										onClick={(e) => e.stopPropagation()}
									>
										<Github size={20} /> Code
									</a>
								)}
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

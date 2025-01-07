import React, { useState, useEffect } from "react";
import { X, Github, ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ProjectTags from "./ProjectTags";

const ProjectModal = ({ project, projects, isOpen, onClose }) => {
	const [activeTab, setActiveTab] = useState("introduction");
	const [currentProject, setCurrentProject] = useState(project);

	useEffect(() => {
		setCurrentProject(project);
	}, [project]);

	if (!isOpen || !currentProject) return null;

	const currentIndex = projects.findIndex(
		(p) => p.title === currentProject.title,
	);
	const nextProject = projects[(currentIndex + 1) % projects.length];

	const handleNextProject = () => {
		setCurrentProject(nextProject);
		setActiveTab("introduction");
	};

	const tabs = ["introduction", "tasks", "reflections"];

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
			<div className="relative max-h-auto w-full max-w-4xl overflow-auto rounded-lg bg-white p-6">
				<button
					onClick={onClose}
					className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
					type="button"
				>
					<X size={24} />
				</button>

				<h2 className="mb-4 font-heading text-3xl font-bold">
					{currentProject.title}
				</h2>

				<ProjectTags tags={currentProject.tags} />

				<div className="mb-6 mt-6 flex gap-4 border-b">
					{tabs.map((tab) => (
						<button
							key={tab}
							type="button"
							onClick={() => setActiveTab(tab)}
							className={`pb-2 capitalize ${
								activeTab === tab
									? "border-b-2 border-primary text-primary"
									: "text-secondary"
							}`}
						>
							{tab}
						</button>
					))}
				</div>

				<div className="prose max-w-none">
					{activeTab === "introduction" && (
						<div>
							<h3 className="mb-4">Introduction</h3>
							<ReactMarkdown>{currentProject.introduction}</ReactMarkdown>
						</div>
					)}

					{activeTab === "tasks" && (
						<div>
							<h3 className="mb-4">Tasks</h3>
							<div className="space-y-4 pl-4">
								{currentProject.tasks.split("\n\n").map((section) => (
									<div key={section.trim()} className="space-y-2">
										{section.split("\n").map((line) => {
											const indentLevel = line.match(/^\s*/)[0].length;
											return (
												<p
													key={line.trim()}
													className={`${indentLevel ? "pl-4" : ""} ${
														line.startsWith("-")
															? "font-semibold mb-0"
															: "text-secondary"
													}`}
												>
													{line}
												</p>
											);
										})}
									</div>
								))}
							</div>
						</div>
					)}

					{activeTab === "reflections" && (
						<div>
							<h3 className="mb-4">Reflections</h3>
							<ReactMarkdown>{currentProject.reflections}</ReactMarkdown>
						</div>
					)}
				</div>

				<div className="mt-8 flex items-center justify-between border-t pt-4">
					<div className="flex gap-4">
						{currentProject.github && (
							<a
								href={currentProject.github}
								target="_blank"
								className="flex items-center gap-2 text-secondary transition-colors hover:text-primary"
								rel="noreferrer"
							>
								<Github size={20} /> Code
							</a>
						)}
						{currentProject.live && (
							<a
								href={currentProject.live}
								target="_blank"
								className="flex items-center gap-2 text-secondary transition-colors hover:text-primary"
								rel="noreferrer"
							>
								<ExternalLink size={20} /> Live Demo
							</a>
						)}
						{currentProject.manualPath && (
							<Link
								to={`/manuals/${currentProject.manualPath}`}
								className="flex items-center gap-2 text-secondary transition-colors hover:text-primary"
							>
								<BookOpen size={20} /> View Manual
							</Link>
						)}
					</div>

					<button
						onClick={handleNextProject}
						className="flex items-center gap-2 text-secondary transition-colors hover:text-primary"
						type="button"
					>
						Next Project <ArrowRight size={20} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;

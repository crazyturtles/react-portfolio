import { BookOpen, Code2, Database, Palette } from "lucide-react";

const skillCategories = [
	{
		title: "Frontend",
		icon: <Palette size={24} />,
		skills: ["React", "TypeScript", "HTML5", "CSS3", "JavaScript", "Blazor"],
		color: "primary",
	},
	{
		title: "Backend",
		icon: <Database size={24} />,
		skills: [
			"Node.js",
			"Express.js",
			"C#",
			".NET",
			"MySQL",
			"SQL Server",
			"PHP",
		],
		color: "secondary",
	},
	{
		title: "Development Tools",
		icon: <Code2 size={24} />,
		skills: ["VS Code", "Visual Studio", "Git", "Vite", "BiomeJS", "Netlify"],
		color: "accent",
	},
	{
		title: "Testing & DevOps",
		icon: <BookOpen size={24} />,
		skills: ["Jest", "Entity Framework", "Python"],
		color: "primary",
	},
];

const Skills = () => {
	return (
		<section id="skills" className="bg-gray-50 dark:bg-surface-dark py-section">
			<div className="container mx-auto px-4">
				<h2 className="mb-12 text-center font-heading text-4xl font-bold text-primary dark:text-primary-dark select-none">
					Skills & Technologies
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{skillCategories.map((category, index) => (
						<div
							key={category.title}
							className="animate-slide-up rounded-lg bg-surface dark:bg-background-dark p-6 shadow-lg transition-all hover:shadow-xl select-none flex flex-col"
							style={{ animationDelay: `${index * 200}ms` }}
						>
							<div>
								<div
									className={`mb-4 text-${category.color} dark:text-${category.color}-dark`}
								>
									{category.icon}
								</div>
								<h3 className="mb-4 font-heading text-2xl font-bold text-primary dark:text-primary-dark select-none">
									{category.title}
								</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{category.skills.map((skill) => (
									<span
										key={skill}
										className="rounded-full bg-gray-100 dark:bg-surface-dark px-3 py-1 text-sm text-secondary dark:text-secondary-dark select-none transition-colors hover:bg-accent/10 dark:hover:bg-accent-dark/10 hover:text-accent dark:hover:text-accent-dark"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;

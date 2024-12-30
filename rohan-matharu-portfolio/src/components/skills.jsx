import { Code2, Database, Palette } from "lucide-react";

const skillCategories = [
	{
		title: "Frontend",
		icon: <Palette size={24} />,
		skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
		color: "primary",
	},
	{
		title: "Backend",
		icon: <Database size={24} />,
		skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
		color: "secondary",
	},
	{
		title: "Tools & Others",
		icon: <Code2 size={24} />,
		skills: ["Git", "Docker", "AWS", "Jest", "CI/CD"],
		color: "accent",
	},
];

const Skills = () => {
	return (
		<section className="bg-gray-50 py-section">
			<div className="container mx-auto px-4">
				<h2 className="mb-12 text-center font-heading text-4xl font-bold text-primary select-none">
					Skills & Technologies
				</h2>
				<div className="grid gap-8 md:grid-cols-3">
					{skillCategories.map((category, index) => (
						<div
							key={category.title}
							className="animate-slide-up rounded-lg bg-white p-6 shadow-lg"
							style={{ animationDelay: `${index * 200}ms` }}
						>
							<div className={`mb-4 text-${category.color}`}>
								{category.icon}
							</div>
							<h3 className="mb-4 font-heading text-2xl font-bold">
								{category.title}
							</h3>
							<div className="flex flex-wrap gap-2">
								{category.skills.map((skill) => (
									<span
										key={skill}
										className="rounded-full bg-gray-100 px-3 py-1 text-sm text-secondary"
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

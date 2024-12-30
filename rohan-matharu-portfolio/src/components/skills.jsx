import { Code2, Database, Palette, BookOpen } from "lucide-react";

const skillCategories = [
	{
		title: "Frontend",
		icon: <Palette size={24} />,
		skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Blazor"],
		color: "primary",
	},
	{
		title: "Backend",
		icon: <Database size={24} />,
		skills: ["C#", ".NET", "Node.js", "SQL Server", "Python", "Visual Basic"],
		color: "secondary",
	},
	{
		title: "Development Tools",
		icon: <Code2 size={24} />,
		skills: ["VS Code", "Visual Studio", "Git", "Netlify", "Microsoft Access"],
		color: "accent",
	},
	{
		title: "Learning",
		icon: <BookOpen size={24} />,
		skills: ["React", "Entity Framework", "Advanced JavaScript", "Node.js"],
		color: "primary",
	},
];

const Skills = () => {
	return (
		<section className="bg-gray-50 py-section">
			<div className="container mx-auto px-4">
				<h2 className="mb-12 text-center font-heading text-4xl font-bold text-primary select-none">
					Skills & Technologies
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{skillCategories.map((category, index) => (
						<div
							key={category.title}
							className="animate-slide-up rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl select-none"
							style={{ animationDelay: `${index * 200}ms` }}
						>
							<div className={`mb-4 text-${category.color}`}>
								{category.icon}
							</div>
							<h3 className="mb-4 font-heading text-2xl font-bold select-none">
								{category.title}
							</h3>
							<div className="flex flex-wrap gap-2">
								{category.skills.map((skill) => (
									<span
										key={skill}
										className="rounded-full bg-gray-100 px-3 py-1 text-sm text-secondary select-none transition-colors hover:bg-accent/10 hover:text-accent"
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

const ProjectTags = ({ tags }) => (
	<div className="mb-4 flex flex-wrap gap-2">
		{tags.map((tag) => (
			<span
				key={tag}
				className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent select-none"
			>
				{tag}
			</span>
		))}
	</div>
);

export default ProjectTags;
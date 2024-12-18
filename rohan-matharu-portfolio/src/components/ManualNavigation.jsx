import React from "react";

const ManualNavigation = ({ sections }) => {
	return (
		<nav className="space-y-2 p-4 bg-gray-50 rounded-lg sticky top-8">
			<h3 className="font-heading text-lg font-bold mb-4">Table of Contents</h3>
			{sections.map((section) => (
				<a
					key={section.id}
					href={`#${section.id}`}
					className="block text-secondary hover:text-primary transition-colors"
				>
					{section.title}
				</a>
			))}
		</nav>
	);
};

export default ManualNavigation;

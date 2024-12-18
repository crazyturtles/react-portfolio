import React from "react";
import { ArrowLeft } from "lucide-react";

const ManualContainer = ({ title, children }) => {
	return (
		<div className="min-h-screen bg-white py-8">
			<div className="container mx-auto px-4">
				<div className="mb-8">
					<a
						href="/"
						className="inline-flex items-center text-secondary hover:text-primary transition-colors"
					>
						<ArrowLeft className="mr-2" size={20} />
						Back to Portfolio
					</a>
				</div>
				<h1 className="font-heading text-4xl font-bold text-primary mb-8">
					{title}
				</h1>
				{children}
			</div>
		</div>
	);
};

export default ManualContainer;

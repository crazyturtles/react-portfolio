import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const Manual = () => {
	const [content, setContent] = useState("");
	const [toc, setToc] = useState([]);
	const { projectId } = useParams();

	useEffect(() => {
		const loadContent = async () => {
			try {
				const response = await fetch(`/manuals/${projectId}.md`);
				const text = await response.text();

				const tocSection =
					text.match(/## Table of Contents\n([\s\S]*?)\n##/)?.[1] || "";

				const tocItems = tocSection.match(/- \[(.*?)\]\((.*?)\)/g) || [];
				const parsedToc = tocItems
					.map((item) => {
						const matches = item.match(/- \[(.*?)\]\((.*?)\)/);
						if (!matches) return null;
						const [, title, link] = matches;
						return { title, link };
					})
					.filter(Boolean);

				const contentWithoutToc = text
					.replace(/## Table of Contents\n[\s\S]*?\n##/, "##")
					.replace(/\n{3,}/g, "\n\n");

				setToc(parsedToc);
				setContent(contentWithoutToc);
			} catch (err) {
				console.error("Error loading markdown:", err);
			}
		};

		loadContent();
	}, [projectId]);

	return (
		<div className="min-h-screen bg-gray-50">
			<nav className="fixed top-0 z-50 w-full bg-white/80 px-4 py-4 backdrop-blur">
				<div className="container mx-auto">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
					>
						<ArrowLeft size={20} />
						Back to Projects
					</Link>
				</div>
			</nav>

			{content && (
				<div className="container mx-auto flex gap-8 px-4 py-20">
					<aside className="sticky top-24 h-[calc(100vh-6rem)] w-64 overflow-y-auto rounded-lg bg-white p-4 shadow-lg">
						<nav className="space-y-2">
							{toc.map((item) => (
								<a
									key={item.link}
									href={item.link}
									className="block text-sm text-secondary hover:text-primary"
								>
									{item.title}
								</a>
							))}
						</nav>
					</aside>

					<main className="flex-1">
						<div className="rounded-lg bg-white p-8 shadow-lg">
							<ReactMarkdown
								className="prose max-w-none prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-primary prose-img:rounded-lg"
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeRaw]}
								components={{
									pre: ({ node, ...props }) => (
										<pre
											{...props}
											className="bg-gray-100 p-4 rounded-lg overflow-x-auto"
										/>
									),
									code: ({ node, ...props }) => (
										<code {...props} className="bg-gray-100 px-1 rounded" />
									),
								}}
							>
								{content}
							</ReactMarkdown>
						</div>
					</main>
				</div>
			)}
		</div>
	);
};

export default Manual;

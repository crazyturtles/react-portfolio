import { ArrowLeft, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { projects } from "./projects";

const KeyboardHandler = ({ onEnter, onEscape, children }) => {
	const handleKeyDown = (e) => {
		if ((e.key === "Enter" || e.key === " ") && onEnter) {
			e.preventDefault();
			onEnter();
		}
		if (e.key === "Escape" && onEscape) {
			onEscape();
		}
	};

	return (
		<button type="button" onKeyDown={handleKeyDown} className="w-full">
			{children}
		</button>
	);
};

const ImageModal = ({ src, alt, isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<KeyboardHandler onEscape={onClose} onEnter={onClose}>
			<div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
				onClick={onClose}
				onKeyDown={(e) => {
					if (e.key === "Escape") onClose();
				}}
				aria-modal="true"
				aria-label={`Image preview: ${alt}`}
			>
				<KeyboardHandler onEscape={onClose} onEnter={onClose}>
					<div
						className="relative max-h-auto max-w-fit overflow-auto bg-white p-4 rounded-lg m-auto"
						onClick={(e) => e.stopPropagation()}
						onKeyDown={(e) => {
							if (e.key === "Escape") onClose();
						}}
					>
						<button
							onClick={onClose}
							className="absolute right-2 top-2 p-1 rounded-full hover:bg-gray-100"
							aria-label="Close image preview"
							type="button"
						>
							<X size={24} />
						</button>
						<img
							src={src}
							alt={alt || "Preview image"}
							className="max-h-[85vh] w-auto"
						/>
					</div>
				</KeyboardHandler>
			</div>
		</KeyboardHandler>
	);
};

const Manual = () => {
	const [content, setContent] = useState("");
	const [toc, setToc] = useState("");
	const [modalImage, setModalImage] = useState(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { projectId } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const projectTitle = projects.find(
			(p) => p.manualPath === projectId,
		)?.title;
		document.title = projectTitle
			? `Rohan Matharu | ${projectTitle} Manual`
			: "Rohan Matharu";

		return () => {
			document.title = "Rohan Matharu";
		};
	}, [projectId]);

	useEffect(() => {
		const loadContent = async () => {
			try {
				const [tocRes, contentRes] = await Promise.all([
					fetch(`/manuals/${projectId}-toc.md`),
					fetch(`/manuals/${projectId}-content.md`),
				]);

				const tocText = await tocRes.text();
				const contentText = await contentRes.text();

				setToc(tocText);
				setContent(contentText);
			} catch (err) {
				console.error("Error loading content:", err);
			}
		};

		loadContent();
	}, [projectId]);

	const handleSmoothScroll = (e, href) => {
		e.preventDefault();
		const element = document.querySelector(href);
		if (element) {
			const offset = 80;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
			setIsMenuOpen(false);
		}
	};

	const renderToc = (markdownContent) => (
		<div className="space-y-2">
			<h2 className="mb-4 font-heading text-lg font-bold text-primary">
				Table of Contents
			</h2>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					ul: ({ children, node, ...props }) => {
						const depth = node?.position?.start?.column
							? Math.floor((node.position.start.column - 1) / 2)
							: 0;
						return (
							<ul className={`space-y-1 ${depth > 0 ? "pl-4" : ""}`} {...props}>
								{children}
							</ul>
						);
					},
					li: ({ children }) => <li>{children}</li>,
					a: ({ href, children }) => (
						<a
							href={href}
							onClick={(e) => handleSmoothScroll(e, href)}
							className="block py-1 text-sm text-secondary hover:text-primary transition-colors"
						>
							{children}
						</a>
					),
				}}
			>
				{markdownContent}
			</ReactMarkdown>
		</div>
	);

	const createHeadingComponent = (level) => {
		return ({ children, ...props }) => {
			const Tag = `h${level}`;
			return (
				<Tag
					id={children.toString().toLowerCase().replace(/\s+/g, "-")}
					{...props}
				>
					{children}
				</Tag>
			);
		};
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<nav className="fixed top-0 z-50 w-full bg-white/80 px-4 py-4 backdrop-blur h-16">
				<div className="container mx-auto flex justify-between items-center">
					<Link
						to="/"
						onClick={() => {
							setTimeout(() => {
								document
									.getElementById("projects")
									?.scrollIntoView({ behavior: "smooth" });
							}, 1);
						}}
						className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
					>
						<ArrowLeft size={20} />
						Back to Projects
					</Link>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								setIsMenuOpen(!isMenuOpen);
							}
						}}
						className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-lg"
						aria-label="Toggle table of contents"
						tabIndex={0}
						type="button"
					>
						<Menu size={24} />
					</button>
				</div>
			</nav>

			<div className="container mx-auto flex gap-8 px-4 py-20">
				{/* Desktop ToC */}
				<aside className="hidden lg:block sticky top-24 h-[calc(100vh-6rem)] w-64 overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
					{renderToc(toc)}
				</aside>

				{/* Mobile ToC */}
				<div
					className={`lg:hidden fixed inset-0 z-40 transform ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					} transition-transform duration-300 ease-in-out`}
				>
					<div
						className="absolute inset-0 bg-black/50"
						onClick={() => setIsMenuOpen(false)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								setIsMenuOpen(false);
							}
						}}
						tabIndex={0}
						role="button"
						aria-label="Close menu overlay"
					/>
					<aside className="relative h-full w-64 overflow-y-auto bg-white p-6 shadow-lg">
						<button
							onClick={() => setIsMenuOpen(false)}
							className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100"
							aria-label="Close menu"
							type="button"
						>
							<X size={24} />
						</button>
						{renderToc(toc)}
					</aside>
				</div>

				<main className="flex-1">
					<div className="rounded-lg bg-white p-8 shadow-lg">
						<ReactMarkdown
							className="prose max-w-none prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-primary prose-img:rounded-lg"
							remarkPlugins={[remarkGfm]}
							rehypePlugins={[rehypeRaw]}
							components={{
								h2: createHeadingComponent(2),
								h3: createHeadingComponent(3),
								img: ({ node, ...props }) => (
									<img
										{...props}
										alt={props.alt || "Documentation image"}
										className="cursor-pointer hover:opacity-90 transition-opacity"
										onClick={() => setModalImage(props)}
									/>
								),
							}}
						>
							{content}
						</ReactMarkdown>
					</div>
				</main>
			</div>

			<ImageModal
				{...modalImage}
				isOpen={!!modalImage}
				onClose={() => setModalImage(null)}
			/>
		</div>
	);
};

export default Manual;

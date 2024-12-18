import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add form submission logic here
		console.log(formData);
	};

	return (
		<section id="contact" className="py-section">
			<div className="container mx-auto px-4">
				<h2 className="mb-12 text-center font-heading text-4xl font-bold text-primary">
					Get In Touch
				</h2>
				<div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label htmlFor="name" className="mb-1 block text-secondary">
								Name
							</label>
							<input
								type="text"
								id="name"
								className="w-full rounded-lg border p-2 focus:border-primary focus:outline-none"
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
							/>
						</div>
						<div>
							<label htmlFor="email" className="mb-1 block text-secondary">
								Email
							</label>
							<input
								type="email"
								id="email"
								className="w-full rounded-lg border p-2 focus:border-primary focus:outline-none"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
						</div>
						<div>
							<label htmlFor="message" className="mb-1 block text-secondary">
								Message
							</label>
							<textarea
								id="message"
								rows={4}
								className="w-full rounded-lg border p-2 focus:border-primary focus:outline-none"
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
							/>
						</div>
						<button
							type="submit"
							className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2 text-white transition-colors hover:bg-primary/90"
						>
							Send Message
							<Send size={16} />
						</button>
					</form>

					<div className="space-y-6">
						<div className="rounded-lg bg-gray-50 p-6">
							<h3 className="mb-4 font-heading text-xl font-bold">
								Connect With Me
							</h3>
							<div className="space-y-4">
								<a
									href="mailto:your.email@example.com"
									className="flex items-center gap-3 text-secondary transition-colors hover:text-primary"
								>
									<Mail /> your.email@example.com
								</a>
								<a
									href="https://github.com/yourusername"
									target="_blank"
									className="flex items-center gap-3 text-secondary transition-colors hover:text-primary"
									rel="noreferrer"
								>
									<Github /> GitHub
								</a>
								<a
									href="https://linkedin.com/in/yourusername"
									target="_blank"
									className="flex items-center gap-3 text-secondary transition-colors hover:text-primary"
									rel="noreferrer"
								>
									<Linkedin /> LinkedIn
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

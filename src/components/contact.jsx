import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState({ type: "", message: "", show: false });
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let timeoutId;
		if (status.message) {
			setStatus((prev) => ({ ...prev, show: true }));
			timeoutId = setTimeout(() => {
				setStatus((prev) => ({ ...prev, show: false }));
				setTimeout(() => {
					setStatus({ type: "", message: "", show: false });
				}, 300);
			}, 10000);
		}
		return () => clearTimeout(timeoutId);
	}, [status.message]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setStatus({ type: "", message: "", show: false });

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: formData.name,
					reply_to: formData.email,
					message: formData.message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);

			setStatus({
				type: "success",
				message: "Message sent successfully! I will get back to you soon.",
				show: true,
			});
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			setStatus({
				type: "error",
				message: "Failed to send message. Please try again.",
				show: true,
			});
		}
		setLoading(false);
	};

	return (
		<section id="contact" className="py-section">
			<div className="container mx-auto px-4">
				<h2 className="mb-12 text-center font-heading dark:font-heading-dark text-4xl font-bold text-primary dark:text-primary-dark select-none">
					Get In Touch
				</h2>
				<div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
					<form onSubmit={handleSubmit} className="space-y-4">
						{status.message && (
							<div
								className={`p-4 rounded-lg mb-4 transition-opacity duration-300 ${
									status.show ? "opacity-100" : "opacity-0"
								} ${
									status.type === "error"
										? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
										: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
								}`}
							>
								{status.message}
							</div>
						)}
						<div>
							<label
								htmlFor="name"
								className="mb-1 block font-sans dark:font-sans-dark text-secondary dark:text-secondary-dark select-none"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								required
								className="w-full rounded-lg border dark:border-surface-dark p-2 bg-surface dark:bg-background-dark text-primary dark:text-primary-dark focus:border-primary dark:focus:border-primary-dark focus:outline-none"
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="mb-1 block font-sans dark:font-sans-dark text-secondary dark:text-secondary-dark select-none"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								required
								className="w-full rounded-lg border dark:border-surface-dark p-2 bg-surface dark:bg-background-dark text-primary dark:text-primary-dark focus:border-primary dark:focus:border-primary-dark focus:outline-none"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="mb-1 block font-sans dark:font-sans-dark text-secondary dark:text-secondary-dark select-none"
							>
								Message
							</label>
							<textarea
								id="message"
								rows={4}
								required
								className="w-full rounded-lg border dark:border-surface-dark p-2 bg-surface dark:bg-background-dark text-primary dark:text-primary-dark focus:border-primary dark:focus:border-primary-dark focus:outline-none"
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
							/>
						</div>
						<button
							type="submit"
							disabled={loading}
							className="flex items-center gap-2 rounded-lg bg-primary dark:bg-primary-dark px-6 py-2 text-white transition-colors hover:bg-primary/90 dark:hover:bg-primary-dark/90 disabled:bg-primary/50 dark:disabled:bg-primary-dark/50 select-none"
						>
							{loading ? "Sending..." : "Send Message"}
							<Send size={16} />
						</button>
					</form>

					<div className="space-y-6">
						<div className="rounded-lg bg-gray-50 dark:bg-surface-dark p-6">
							<h3 className="mb-4 font-heading dark:font-heading-dark text-xl font-bold text-primary dark:text-primary-dark select-none">
								Connect With Me
							</h3>
							<div className="space-y-4">
								<a
									href="mailto:rohanmatharu@live.ca"
									className="flex items-center gap-3 font-sans dark:font-sans-dark text-secondary dark:text-secondary-dark transition-colors hover:text-primary dark:hover:text-primary-dark select-none"
								>
									<Mail /> rohanmatharu@live.ca
								</a>
								<a
									href="https://github.com/crazyturtles"
									target="_blank"
									className="flex items-center gap-3 font-sans dark:font-sans-dark text-secondary dark:text-secondary-dark transition-colors hover:text-primary dark:hover:text-primary-dark select-none"
									rel="noreferrer"
								>
									<Github /> GitHub
								</a>
								<a
									href="https://linkedin.com/in/rohanmatharu"
									target="_blank"
									className="flex items-center gap-3 font-sans dark:font-sans-dark text-secondary dark:text-secondary-dark transition-colors hover:text-primary dark:hover:text-primary-dark select-none"
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

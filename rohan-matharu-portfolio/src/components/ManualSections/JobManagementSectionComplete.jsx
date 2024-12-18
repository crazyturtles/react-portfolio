const JobManagementSection = () => (
	<>
		<section id="job-creation">
			<h2>Job Creation</h2>
			<div className="space-y-6">
				<img
					src="/src/public/manual-images/job-creation-form.png"
					alt="Job Creation Form"
					className="rounded-lg shadow-md"
				/>

				<div className="grid md:grid-cols-2 gap-6">
					<div className="space-y-4">
						<h3 className="font-semibold">Basic Information</h3>
						<ul className="list-disc list-inside space-y-2">
							<li>Auto-generated ticket numbers</li>
							<li>Customer/supplier search</li>
							<li>Job date selection</li>
							<li>Time scheduling with auto-updates</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="font-semibold">Contact Management</h3>
						<img
							src="/src/public/manual-images/contact-selection-popup.png"
							alt="Contact Selection"
							className="rounded-lg shadow-md"
						/>
						<ul className="list-disc list-inside space-y-2">
							<li>Search existing contacts</li>
							<li>Add new contacts</li>
							<li>Delete obsolete contacts</li>
						</ul>
					</div>
				</div>

				<div className="bg-gray-50 p-4 rounded-lg space-y-4">
					<h3 className="font-semibold">Job Details</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Pump type selection with preset rates</li>
						<li>Pour type management</li>
						<li>Required concrete volume</li>
						<li>Pour rate settings</li>
						<li>Carbon levy configuration</li>
						<li>Auto-calculated totals</li>
						<li>Custom job color coding</li>
					</ul>
				</div>
			</div>
		</section>

		<section id="modify-a-job">
			<h2>Modify a Job</h2>
			<div className="space-y-6">
				<img
					src="/src/public/manual-images/job-modification-form.png"
					alt="Job Modification Form"
					className="rounded-lg shadow-md"
				/>

				<div className="bg-gray-50 p-4 rounded-lg">
					<h3 className="font-semibold mb-4">Modification Features</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Customer/supplier information updates</li>
						<li>Google Maps location integration</li>
						<li>Real-time total calculations</li>
						<li>Pour type modifications</li>
						<li>Live preview of changes</li>
					</ul>
				</div>
			</div>
		</section>
	</>
);

export default JobManagementSection;

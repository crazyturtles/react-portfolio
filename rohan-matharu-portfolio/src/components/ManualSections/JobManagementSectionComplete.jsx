const JobManagementSection = () => (
	<>
		<section id="job-creation">
			<h2>Job Creation</h2>
			<div className="space-y-6">
				<img
					src="/manual-images/job-creation-form.png"
					alt="Job Creation Form"
					className="rounded-lg shadow-md"
				/>

				<div className="flex flex-col md:flex-row gap-6">
					<div className="flex-1 space-y-4">
						<h3 className="font-semibold">Basic Information</h3>
						<ul className="list-disc list-inside space-y-2">
							<li>Auto-generated ticket numbers</li>
							<li>Customer/supplier search</li>
							<li>Job date selection</li>
							<li>Time scheduling with auto-updates</li>
						</ul>
					</div>

					<div className="flex-1 space-y-4">
						<h3 className="font-semibold">Contact Management</h3>
						<img
							src="/manual-images/contact-selection-popup.png"
							alt="Contact Selection"
							className="rounded-lg shadow-md w-72"
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
					src="/manual-images/job-modification-form.png"
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

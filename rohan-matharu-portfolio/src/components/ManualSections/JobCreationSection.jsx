const JobCreationSection = () => (
	<section id="job-creation" className="space-y-8">
		<h2>Job Creation</h2>

		<div className="space-y-4">
			<p>
				When a new job comes in the user will have to create a job. Access the
				job creation in three ways:
			</p>
			<ul className="list-disc list-inside">
				<li>Click "Job Creator" in the navigation</li>
				<li>Right click on a pre-existing job and select "New Job"</li>
				<li>
					Select "New Job from Template" to copy items from an existing job
				</li>
			</ul>
		</div>

		<div className="space-y-4">
			<img
				src="/manual-images/job-creation-form.png"
				alt="Job Creation Form"
				className="rounded-lg shadow-md w-full"
			/>

			<div className="flex flex-col md:flex-row gap-6">
				<div className="flex-1 space-y-4">
					<h3 className="font-semibold">Essential Information</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Ticket Number: Auto-generated based on job date</li>
						<li>Customer/Supplier: Searchable dropdown selection</li>
						<li>Job Start Date: Calendar selection</li>
						<li>
							Scheduling:
							<ul className="list-disc list-inside ml-4">
								<li>Set job start time</li>
								<li>Concrete on site auto-updates to 30 mins after arrival</li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="flex-1 space-y-4">
					<h3 className="font-semibold">Contact Management</h3>
					<img
						src="/manual-images/contact-selection-popup.png"
						alt="Contact Selection"
						className="rounded-lg shadow-md"
					/>
					<ul className="list-disc list-inside space-y-2">
						<li>Search bar filters existing contacts</li>
						<li>Add new contacts with checkbox enabled</li>
						<li>Delete unnecessary contacts</li>
						<li>Close via outside click or 'X' button</li>
					</ul>
				</div>
			</div>

			<div className="bg-gray-50 p-6 rounded-lg space-y-4">
				<h3 className="font-semibold">Job Details Configuration</h3>
				<div className="flex flex-col md:flex-row gap-6">
					<div className="flex-1">
						<h4 className="font-medium mb-2">Pump and Pour Settings</h4>
						<ul className="list-disc list-inside space-y-2">
							<li>Select pump type with preset hourly rates</li>
							<li>Choose and remove pour types as needed</li>
							<li>Set required m³ for job completion</li>
							<li>Configure pour rate (if not set by pump type)</li>
							<li>View row-by-row total calculations</li>
						</ul>
					</div>

					<div className="flex-1">
						<h4 className="font-medium mb-2">Additional Features</h4>
						<ul className="list-disc list-inside space-y-2">
							<li>Carbon Levy selection (whole number rates)</li>
							<li>Comprehensive job summary with all totals</li>
							<li>Custom job color coding</li>
							<li>
								Two-step job deletion confirmation:
								<ul className="list-disc list-inside ml-4">
									<li>Checkbox confirmation</li>
									<li>4-digit verification code</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default JobCreationSection;

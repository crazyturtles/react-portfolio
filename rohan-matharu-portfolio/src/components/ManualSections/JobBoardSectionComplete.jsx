const JobBoardSectionComplete = () => (
	<section id="job-board" className="space-y-8">
		<h2>Explore the Job Board</h2>

		<div className="space-y-6">
			<img
				src="/src/public/manual-images/job-board-main-view.png"
				alt="Job Board Main View"
				className="rounded-lg shadow-md w-full"
			/>

			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<h3 className="font-semibold mb-4">Navigation Controls</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Previous day button</li>
						<li>Calendar date picker for any date</li>
						<li>Current day quick access</li>
						<li>Next day button</li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold mb-4">Time Display</h3>
					<img
						src="/src/public/manual-images/time-display.png"
						alt="Time Display"
						className="rounded-lg shadow-md mb-2"
					/>
					<p>Click upper middle button for current local time</p>
				</div>
			</div>

			<div className="bg-gray-50 p-6 rounded-lg">
				<h3 className="font-semibold mb-4">Search and Job Status</h3>
				<div className="grid gap-6 md:grid-cols-2">
					<div>
						<h4 className="font-medium mb-2">Job Status View</h4>
						<img
							src="/src/public/manual-images/job-status.png"
							alt="Job Status View"
							className="rounded-lg shadow-md mb-2"
						/>
						<ul className="list-disc list-inside">
							<li>Shows available units for the day</li>
							<li>Unit availability limit: 7 jobs per day</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium mb-2">Search Functionality</h4>
						<img
							src="/src/public/manual-images/search-by-ticket.png"
							alt="Search By Ticket"
							className="rounded-lg shadow-md mb-2"
						/>
						<ul className="list-disc list-inside">
							<li>Search by Ticket number</li>
							<li>Search by Customer name</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="bg-gray-50 p-6 rounded-lg">
				<h3 className="font-semibold mb-4">Right-Click Menu Options</h3>
				<img
					src="/src/public/manual-images/right-click-menu.png"
					alt="Right Click Menu"
					className="rounded-lg shadow-md mb-4"
				/>
				<div className="grid gap-6 md:grid-cols-3">
					<div>
						<h4 className="font-medium mb-2">Job Management</h4>
						<ul className="list-disc list-inside space-y-1">
							<li>New Job creation</li>
							<li>Template-based creation</li>
							<li>Edit existing job</li>
							<li>Reset job status</li>
							<li>Cancel job</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium mb-2">Unit & Operator</h4>
						<ul className="list-disc list-inside space-y-1">
							<li>Assign job to unit</li>
							<li>Change operator</li>
							<li>Send operator message</li>
							<li>Clear message icon</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium mb-2">Status & Info</h4>
						<ul className="list-disc list-inside space-y-1">
							<li>Confirm details</li>
							<li>Set washing status</li>
							<li>Complete job</li>
							<li>Print job details</li>
							<li>View customer history</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default JobBoardSectionComplete;

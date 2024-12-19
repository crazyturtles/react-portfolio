const ReportingComplete = () => (
	<section id="reporting" className="space-y-8">
		<h2>Reporting</h2>

		{/* Report Header Controls */}
		<div className="bg-gray-50 p-6 rounded-lg">
			<h3 className="font-semibold mb-4">Report Controls</h3>
			<img
				src="/manual-images/report-header.png"
				alt="Report Header"
				className="rounded-lg shadow-md mb-4"
			/>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-1">
					<h4 className="font-medium mb-2">Basic Controls</h4>
					<ul className="list-disc list-inside">
						<li>Print functionality</li>
						<li>Data refresh</li>
						<li>Page navigation</li>
						<li>Zoom controls</li>
					</ul>
				</div>
				<div className="flex-1">
					<h4 className="font-medium mb-2">Page Setup</h4>
					<img
						src="/manual-images/page-layout-settings.png"
						alt="Page Layout"
						className="rounded-lg shadow-md mb-2"
					/>
					<ul className="list-disc list-inside">
						<li>Margin adjustment</li>
						<li>Page orientation</li>
						<li>Paper size selection</li>
					</ul>
				</div>
			</div>
		</div>

		{/* Customer Job History */}
		<div className="bg-gray-50 p-6 rounded-lg">
			<h3 className="font-semibold mb-4">Customer Job History</h3>
			<img
				src="/manual-images/customer-history.png"
				alt="Customer History"
				className="rounded-lg shadow-md mb-4"
			/>
			<div className="space-y-4">
				<h4 className="font-medium mb-2">Features</h4>
				<ul className="list-disc list-inside">
					<li>Customer search/selection</li>
					<li>Unit-based filtering</li>
					<li>Comprehensive job history</li>
					<li>Detailed job information</li>
				</ul>
			</div>
		</div>

		{/* Amount Pumped Reports */}
		<div className="bg-gray-50 p-6 rounded-lg">
			<h3 className="font-semibold mb-4">Amount Pumped Reports</h3>
			<div className="flex flex-col gap-6">
				<div>
					<h4 className="font-medium mb-2">By Job Type</h4>
					<img
						src="/manual-images/pumped-amount-report.png"
						alt="Pumped Amount Report"
						className="rounded-lg shadow-md mb-2"
					/>
					<ul className="list-disc list-inside">
						<li>Date range filtering</li>
						<li>Job type categorization</li>
						<li>Customer breakdown</li>
						<li>Volume and hours tracking</li>
					</ul>
				</div>

				<div>
					<h4 className="font-medium mb-2">By Unit</h4>
					<img
						src="/manual-images/unit-pumped-amounts.png"
						alt="Unit Pumped Amounts"
						className="rounded-lg shadow-md mb-2"
					/>
					<ul className="list-disc list-inside">
						<li>Unit-specific data</li>
						<li>Date-based analysis</li>
						<li>Volume tracking</li>
					</ul>
				</div>
			</div>
		</div>

		{/* Pipe Change and Job Count */}
		<div className="bg-gray-50 p-6 rounded-lg">
			<h3 className="font-semibold mb-4">Additional Reports</h3>
			<div className="flex flex-col md:flex-row gap-6">
				<div className="flex-1">
					<h4 className="font-medium mb-2">Pipe Change Tracking</h4>
					<img
						src="/manual-images/pipe-change-report.png"
						alt="Pipe Change Report"
						className="rounded-lg shadow-md mb-2"
					/>
					<ul className="list-disc list-inside">
						<li>Unit monitoring</li>
						<li>Boom/deck pipe volumes</li>
						<li>Last change date tracking</li>
					</ul>
				</div>

				<div className="flex-1">
					<h4 className="font-medium mb-2">Job Count Details</h4>
					<img
						src="/manual-images/job-count-summary.png"
						alt="Job Count Summary"
						className="rounded-lg shadow-md mb-2"
					/>
					<ul className="list-disc list-inside">
						<li>Customer filtering</li>
						<li>Total job counts</li>
						<li>Summary statistics</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);

export default ReportingComplete;

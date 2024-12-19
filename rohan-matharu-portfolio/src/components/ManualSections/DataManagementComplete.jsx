const DataManagementComplete = () => (
	<section id="manage-data" className="space-y-8">
		<h2>Manage Data</h2>

		{/* Technician Section */}
		<div className="bg-gray-50 p-6 rounded-lg">
			<h3 className="font-semibold mb-4">Technician Management</h3>
			<img
				src="/manual-images/technician-management-page.png"
				alt="Technician Management"
				className="rounded-lg shadow-md mb-4"
			/>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-1">
					<h4 className="font-medium mb-2">Filtering Options</h4>
					<ul className="list-disc list-inside">
						<li>All technicians view</li>
						<li>Active technicians only</li>
						<li>Inactive technicians only</li>
						<li>Search functionality</li>
					</ul>
				</div>
				<div className="flex-1">
					<h4 className="font-medium mb-2">Management Features</h4>
					<ul className="list-disc list-inside">
						<li>Load and edit existing data</li>
						<li>Add new technicians</li>
						<li>Required field validation</li>
						<li>Save/Cancel operations</li>
					</ul>
				</div>
			</div>
		</div>

		{/* Supplier Section */}
		<div className="bg-gray-50 p-6 rounded-lg">
			<h3 className="font-semibold mb-4">Supplier Management</h3>
			<img
				src="/manual-images/supplier-management-page.png"
				alt="Supplier Management"
				className="rounded-lg shadow-md mb-4"
			/>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-1">
					<h4 className="font-medium mb-2">Key Features</h4>
					<ul className="list-disc list-inside">
						<li>Active/Inactive status filtering</li>
						<li>Search functionality</li>
						<li>Edit existing suppliers</li>
						<li>Add new suppliers</li>
					</ul>
				</div>
				<div className="flex-1">
					<h4 className="font-medium mb-2">Data Management</h4>
					<ul className="list-disc list-inside">
						<li>Required field validation</li>
						<li>Status updates</li>
						<li>Contact information</li>
						<li>Save/Cancel changes</li>
					</ul>
				</div>
			</div>
		</div>

		{/* Job Types Section */}
		<div className="bg-gray-50 p-6 rounded-lg">
			<h3 className="font-semibold mb-4">Job Types</h3>
			<img
				src="/manual-images/job-types-management.png"
				alt="Job Types Management"
				className="rounded-lg shadow-md mb-4"
			/>
			<ul className="list-disc list-inside">
				<li>Search and filter job types</li>
				<li>Edit existing types</li>
				<li>Add new job types</li>
				<li>Status management</li>
			</ul>
		</div>

		{/* Pour Types Section */}
		<div className="bg-gray-50 p-6 rounded-lg">
			<h3 className="font-semibold mb-4">Pour Types</h3>
			<img
				src="/manual-images/pour-types-management.png"
				alt="Pour Types Management"
				className="rounded-lg shadow-md mb-4"
			/>
			<ul className="list-disc list-inside">
				<li>Active/Inactive filtering</li>
				<li>Search functionality</li>
				<li>Edit pour types</li>
				<li>Add new types</li>
			</ul>
		</div>

		{/* Units Section */}
		<div className="bg-gray-50 p-6 rounded-lg">
			<h3 className="font-semibold mb-4">Units</h3>
			<img
				src="/manual-images/units-management-page.png"
				alt="Units Management"
				className="rounded-lg shadow-md mb-4"
			/>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-1">
					<h4 className="font-medium mb-2">Management Options</h4>
					<ul className="list-disc list-inside">
						<li>Status filtering (Active/Inactive)</li>
						<li>Search functionality</li>
						<li>Unit information editing</li>
						<li>New unit creation</li>
					</ul>
				</div>
				<div className="flex-1">
					<h4 className="font-medium mb-2">Unit Details</h4>
					<ul className="list-disc list-inside">
						<li>Unit selection dropdown</li>
						<li>Operator assignment</li>
						<li>Date management</li>
						<li>Save/Cancel operations</li>
					</ul>
				</div>
			</div>
		</div>

		{/* Company Information */}
		<div className="bg-gray-50 p-6 rounded-lg">
			<h3 className="font-semibold mb-4">Company Information</h3>
			<img
				src="/manual-images/company-information-page.png"
				alt="Company Information"
				className="rounded-lg shadow-md mb-4"
			/>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-1">
					<h4 className="font-medium mb-2">General Settings</h4>
					<ul className="list-disc list-inside">
						<li>Company details update</li>
						<li>Default rate configuration</li>
						<li>SMTP setup</li>
						<li>Email test functionality</li>
					</ul>
				</div>
				<div className="flex-1">
					<h4 className="font-medium mb-2">Actions</h4>
					<ul className="list-disc list-inside">
						<li>Save all changes</li>
						<li>Cancel modifications</li>
						<li>Test email configuration</li>
						<li>Return to previous page</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);

export default DataManagementComplete;

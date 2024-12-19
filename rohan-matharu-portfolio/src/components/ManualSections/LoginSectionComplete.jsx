const LoginSectionComplete = () => (
	<section id="logging-in" className="space-y-8">
		<h2>Logging in the PumpMaster V3</h2>

		<div className="space-y-4">
			<img
				src="/manual-images/login-screen.png"
				alt="Login Screen"
				className="rounded-lg shadow-md w-auto"
			/>

			<div className="bg-gray-50 p-6 rounded-lg">
				<h3 className="font-semibold mb-4">Access Requirements</h3>
				<div className="grid gap-6 md:grid-cols-2">
					<div>
						<h4 className="font-medium mb-2">Default Credentials</h4>
						<ul className="list-disc list-inside space-y-2">
							<li>
								Username: <code>admin</code>
							</li>
							<li>
								Password: <code>Password1</code>
							</li>
							<li>Modify via PM_Users table in PumpMasterDB</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium mb-2">Session Management</h4>
						<ul className="list-disc list-inside space-y-2">
							<li>12-hour automatic timeout</li>
							<li>Role-based access control</li>
							<li>Administrator privileges required for user creation</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="space-y-4">
				<img
					src="/manual-images/user-profile-submenu.png"
					alt="User Profile Menu"
					className="rounded-lg shadow-md"
				/>
				<div>
					<h3 className="font-semibold mb-2">User Profile Menu Features</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Profile settings modification</li>
						<li>User creation (Admin only)</li>
						<li>Sign out functionality</li>
					</ul>
				</div>
			</div>

			<div className="bg-gray-50 p-6 rounded-lg">
				<h3 className="font-semibold mb-4">Creating New Users</h3>
				<img
					src="/manual-images/create-user-form.png"
					alt="Create User Form"
					className="rounded-lg shadow-md mb-4"
				/>
				<ul className="list-disc list-inside space-y-2">
					<li>
						Required fields:
						<ul className="list-disc list-inside ml-4">
							<li>Username (user's choice)</li>
							<li>Role selection (dropdown)</li>
							<li>Password (minimum 8 characters)</li>
							<li>Password confirmation</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</section>
);

export default LoginSectionComplete;

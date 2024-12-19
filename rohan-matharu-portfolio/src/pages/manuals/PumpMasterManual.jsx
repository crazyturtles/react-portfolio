import React from "react";
import ManualContainer from "../../components/ManualContainer";
import ManualNavigation from "../../components/ManualNavigation";
import LoginSectionComplete from "../../components/ManualSections/LoginSectionComplete";
import JobBoardSectionComplete from "../../components/ManualSections/JobBoardSectionComplete";
import JobCreationSection from "../../components/ManualSections/JobCreationSection";
import JobManagementSectionComplete from "../../components/ManualSections/JobManagementSectionComplete";
import DataManagementComplete from "../../components/ManualSections/DataManagementComplete";
import ReportingComplete from "../../components/ManualSections/ReportingComplete";

const sections = [
	{ id: "what-is-pumpmaster-v3", title: "What is PumpMaster V3" },
	{ id: "logging-in", title: "Logging in the PumpMaster V3" },
	{ id: "explore-the-job-board", title: "Explore the Job Board" },
	{
		id: "right-clicking-listing",
		title: "Right Clicking a Listing on the Job Board",
	},
	{ id: "job-creation", title: "Job Creation" },
	{ id: "modify-a-job", title: "Modify a Job" },
	{ id: "manage-data", title: "Manage Data" },
	{ id: "reporting", title: "Reporting" },
];

const PumpMasterManual = () => {
	return (
		<ManualContainer title="PumpMaster Version 3.0">
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
				<aside className="lg:col-span-1">
					<ManualNavigation sections={sections} />
				</aside>

				<main className="lg:col-span-3 prose prose-slate max-w-none">
					<div className="flex justify-center mb-8">
						<img
							src="/img/pumpmaster-logo-2.1-transparent.png"
							alt="PumpMaster Logo"
							className="max-w-md"
						/>
					</div>

					<section id="what-is-pumpmaster-v3" className="mb-12">
						<h2>What is PumpMaster V3</h2>
						<p>
							PumpMaster is a web application that aims to help a Concrete
							Pumping company with daily operations. The PumpMaster V3 is an
							upgrade from the PumpMasterV2; the new application still retains
							the robust functionality of its predecessor, from maintaining all
							data essential to the end user's daily operation to creating,
							scheduling, and assigning a job. With a newer and a more
							user-friendly user interface, the PumpMasterV3 application aims to
							make the work of the end user a lot more efficient and that will
							directly translate to the company's success.
						</p>
					</section>

					<LoginSectionComplete />
					<JobBoardSectionComplete />
					<JobCreationSection />
					<JobManagementSectionComplete />
					<DataManagementComplete />
					<ReportingComplete />

					<footer className="mt-12 pt-8 border-t">
						<p className="text-sm text-gray-600">
							© 2024 PumpMasterV3. Developed for 1st Call Concrete Pumping Ltd.
							by PlanetCom Inc. All rights reserved.
						</p>
					</footer>
				</main>
			</div>
		</ManualContainer>
	);
};

export default PumpMasterManual;

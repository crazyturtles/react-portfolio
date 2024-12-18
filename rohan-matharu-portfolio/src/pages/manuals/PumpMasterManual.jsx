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
	{ id: "logging-in", title: "Logging in" },
	{ id: "job-board", title: "Job Board" },
	{ id: "job-creation", title: "Job Creation" },
	{ id: "modify-a-job", title: "Modify a Job" },
	{ id: "manage-data", title: "Manage Data" },
	{ id: "reporting", title: "Reporting" },
];

const PumpMasterManual = () => {
	return (
		<ManualContainer title="PumpMaster V3 Documentation">
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

					<div className="bg-white p-6 rounded-lg shadow-sm mb-8">
						<div className="flex items-center mb-4">
							<img
								src="/github/workflows/jest.yml/badge.svg?branch=sprint-3-testing"
								alt="Jest Tests"
								className="mr-2"
							/>
						</div>
						<p className="text-lg">Version 3.0 - User Manual</p>
					</div>

					<section id="what-is-pumpmaster-v3" className="mb-12">
						<h2>What is PumpMaster V3</h2>
						<p>
							PumpMaster is a web application designed for Concrete Pumping
							companies to streamline their daily operations. Version 3 builds
							upon PumpMasterV2's foundation while introducing a more intuitive
							user interface. The application maintains comprehensive
							functionality for data management, job scheduling, and assignment
							processes.
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

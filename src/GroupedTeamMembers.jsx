import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
	const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

	function groupTeamMembers() {
		let teams = [];

		let teamAMembers = employees.filter((employee) => employee.teamName === "TeamA");
		let teamA = { team: "TeamA", members: teamAMembers, collpased: selectedTeam === "TeamA" ? false : true };
		teams.push(teamA);

		let teamBMembers = employees.filter((employee) => employee.teamName === "TeamB");
		let teamB = { team: "TeamB", members: teamBMembers, collpased: selectedTeam === "TeamB" ? false : true };
		teams.push(teamB);

		let teamCMembers = employees.filter((employee) => employee.teamName === "TeamC");
		let teamC = { team: "TeamC", members: teamCMembers, collpased: selectedTeam === "TeamC" ? false : true };
		teams.push(teamC);

		let teamDMembers = employees.filter((employee) => employee.teamName === "TeamD");
		let teamD = { team: "TeamD", members: teamDMembers, collpased: selectedTeam === "TeamD" ? false : true };
		teams.push(teamD);

		return teams;
	}

	function handleTeamClick(event) {
		let transformedGroupData = groupedEmployees.map((groupedData) =>
			groupedData.team === event.currentTarget.id
				? { ...groupedData, collpased: !groupedData.collpased }
				: groupedData
		);

		setGroupedEmployees(transformedGroupData);
		setTeam(event.currentTarget.id);
	}

	return (
		<main className="container">
			{groupedEmployees.map((item) => {
				return (
					<div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
						<h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
							Team Name: {item.team}
						</h4>
						<div id={"collapse_" + item.team} className={item.collpased === true ? "collapse" : ""}>
							{/* <hr /> */}
							{item.members.map((member) => {
								return (
									<div key={member.id} className="mt-2">
										<h5 className="card-title mt-2">
											<span className="text-dark">Full Name:{member.fullName}</span>
										</h5>
										<p>Designation:{member.designation}</p>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</main>
	);
};

export default GroupedTeamMembers;

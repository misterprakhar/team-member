import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
	return employees.map((employee) => (
		<div key={employee.id}>
			<TeamMemberCard
				employee={employee}
				handleEmployeeCardClick={handleEmployeeCardClick}
				selectedTeam={selectedTeam}
			/>
		</div>
	));
};

export default TeamMembers;

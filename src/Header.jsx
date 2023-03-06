const Header = ({ selectedTeam, teamMemberCount }) => {
	return (
		<header className="container">
			<div className="row justify-content-center mt-3 mb-3">
				<div className="col-8">
					<h1>Team Member Allocation</h1>
					<h3>
						{selectedTeam.slice(0, -1)} {selectedTeam.slice(-1)} has {teamMemberCount}{" "}
						{teamMemberCount === 1 ? "member" : "members"}
					</h3>
				</div>
			</div>
		</header>
	);
};

export default Header;

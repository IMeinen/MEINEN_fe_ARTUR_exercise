import {useState} from 'react';
import {ListItem, Teams as TeamsList} from 'types';

const useTeams = () => {
	const [teams, setTeams] = useState<TeamsList[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [filteredTeams, setFilteredTeams] = useState<TeamsList[]>([]);

	const listTeams = (teamsList: TeamsList[]) => {
		return teamsList.map(team => {
			const columns = [
				{
					key: 'Name: ',
					value: team?.name || '',
				},
			];
			return {
				id: team.id,
				url: `/team/${team.id}`,
				columns,
				navigationProps: team,
			} as ListItem;
		});
	};

	const handleFilterTeam = (event: React.FormEvent<HTMLInputElement>) => {
		const filteredList = teams.filter((team) => 
			team.name.toLowerCase().includes(event.currentTarget.value.toLocaleLowerCase()));
		setFilteredTeams(filteredList);
	};

	return {
		setTeams,
		isLoading,
		setIsLoading,
		listTeams,
		handleFilterTeam,
		setFilteredTeams,
		filteredTeams,
	};
};

export default useTeams;
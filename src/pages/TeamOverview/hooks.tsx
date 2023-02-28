import React, {useState} from 'react';
import {ListItem, UserData} from 'types';
import {Card} from 'components';
import {useLocation, useParams} from 'react-router-dom';
import {LeadContainer} from './styles';
import {TeamOverviewData} from './types';

const useTeamOverview = () => {
    const location = useLocation();
    const {teamId} = useParams();
    const [pageData, setPageData] = useState<TeamOverviewData>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredTeamMembers,setFilteredTeamMembers] = useState<UserData[]>([]);
    const [filteredTeamLead,setFilteredTeamLead] = useState<UserData | null>();

    const listTeamMembers = (users: UserData[]) => {
        return users.map(user => {
            const columns = [
                {
                    key: 'Name: ',
                    value: `${user?.firstName || ''} ${user?.lastName || ''}`,
                },
                {
                    key: 'Display Name: ',
                    value: user?.displayName || '',
                },
                {
                    key: 'Location: ',
                    value: user?.location || '',
                },
            ];
            return {
                id: user.id,
                url: `/user/${user.id}`,
                columns,
                navigationProps: user,
            };
        }) as ListItem[];
    };

    const renderTeamLead = (teamLead) => {
        const columns = [
            {
                key: 'Team Lead',
                value: '',
            },
            {
                key: 'Name: ',
                value: `${teamLead?.firstName || ''} ${teamLead?.lastName || ''}`,
            },
            {
                key: 'Display Name: ',
                value: teamLead?.displayName || '',
            },
            {
                key: 'Location: ',
                value: teamLead?.location || '',
            },
        ];
        return (<LeadContainer><Card columns={columns} url={`/user/${teamLead.id}`} navigationProps={teamLead} /></LeadContainer>);
    };

    const filterList = (filterData,event: React.FormEvent<HTMLInputElement>) => {
        return filterData.filter((teamMember) => 
        `${teamMember.firstName} ${teamMember.lastName}`.toLowerCase().includes(event.currentTarget.value.toLocaleLowerCase()));
    };

    const handleFilterTeamMembers = (event: React.FormEvent<HTMLInputElement>,filterData:TeamOverviewData=pageData) => {
        const filteredList = filterList(filterData.teamMembers,event);
        setFilteredTeamMembers(filteredList);

        const filteredLead = `${filterData.teamLead.firstName} ${filterData.teamLead.lastName}`.toLowerCase().includes(event.currentTarget.value.toLocaleLowerCase()) ?
            filterData.teamLead : null;

        setFilteredTeamLead(filteredLead);
    };

    return {
        filterList,
        location,
        teamId,
        listTeamMembers,
        renderTeamLead,
        pageData,
        setPageData,
        isLoading,
        setIsLoading,
        filteredTeamLead,
        setFilteredTeamLead,
        filteredTeamMembers,
        setFilteredTeamMembers,
        handleFilterTeamMembers,
    };
};

export default useTeamOverview;
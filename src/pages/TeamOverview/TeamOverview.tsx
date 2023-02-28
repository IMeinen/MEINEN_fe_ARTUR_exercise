import React, {useEffect} from 'react';

import {Header,List,SearchBar,NotFoundFeedback} from 'components';
import {getTeamOverview, getUserData} from 'api';
import {Container} from 'components/GlobalComponents';

import useTeamOverview from './hooks';

const TeamOverview = () => {
    
    const {
        location,
        teamId,
        listTeamMembers,
        renderTeamLead,
        setPageData,
        isLoading,
        setIsLoading,
        filteredTeamLead,
        setFilteredTeamLead,
        filteredTeamMembers,
        setFilteredTeamMembers,
        handleFilterTeamMembers,
      } = useTeamOverview();

    useEffect(() => {
        const getTeamUsers = async () => {
            const {teamLeadId, teamMemberIds = []} = await getTeamOverview(teamId);
            const teamLead = await getUserData(teamLeadId);

            const teamMembers = [];
            for(const teamMemberId of teamMemberIds) {
                const data = await getUserData(teamMemberId);
                teamMembers.push(data);
            }
            setPageData({
                teamLead,
                teamMembers,
            });
            setFilteredTeamMembers(teamMembers);
            setFilteredTeamLead(teamLead);
            setIsLoading(false);
        };
        getTeamUsers();
    }, [teamId,setIsLoading,setPageData,setFilteredTeamMembers,setFilteredTeamLead]);

    return (
        <Container>
            <Header title={`Team ${location?.state?.name || ''}`} />
            {!isLoading && <SearchBar title='Search for a team member' placeholder='Search by member name' onChange={handleFilterTeamMembers} />}
            {!isLoading && filteredTeamLead && renderTeamLead(filteredTeamLead)}
            <List items={listTeamMembers(filteredTeamMembers ?? [])} isLoading={isLoading} />
            {!isLoading && filteredTeamMembers.length === 0 && !filteredTeamLead && <NotFoundFeedback/>}
        </Container>
    );
};

export default TeamOverview;

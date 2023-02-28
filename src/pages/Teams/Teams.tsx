import React, {useEffect} from 'react';
import {getTeams as fetchTeams} from 'api';
import {Header, List, SearchBar,NotFoundFeedback} from 'components';
import {Container} from 'components/GlobalComponents';
import useTeams from './hooks';

const Teams = () => {
    const {
        listTeams,
        handleFilterTeam,
        filteredTeams,
        setFilteredTeams,
        setTeams,
        isLoading,
        setIsLoading} = useTeams();

    useEffect(() => {
        const getTeams = async () => {
            const response = await fetchTeams();
            setTeams(response);
            setFilteredTeams(response);
            setIsLoading(false);
        };

        getTeams();
    }, [setIsLoading,setTeams,setFilteredTeams]);

    return (   
        <Container>
            <Header title="Teams" showBackButton={false} />
            {!isLoading && <SearchBar title='Search for a team'placeholder='Search by team name' onChange={handleFilterTeam} />}
            <List items={listTeams(filteredTeams)} isLoading={isLoading} />
            {!isLoading && filteredTeams.length === 0 && <NotFoundFeedback/>}
        </Container>       
    );
};

export default Teams;

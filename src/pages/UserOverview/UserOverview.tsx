import React from 'react';
import {useLocation} from 'react-router-dom';
import {Header} from 'components';
import {Container} from 'components/GlobalComponents';
import useUserOverview from './hooks';

const UserOverview = () => {
    const location = useLocation();
    const {listUsers} = useUserOverview();
    return (
        <Container>
            <Header
                title={`User ${location.state?.firstName} ${location.state.lastName}`}
            />
            {listUsers(location.state)}
        </Container>
    );
};

export default UserOverview;

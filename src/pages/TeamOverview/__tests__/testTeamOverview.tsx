import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import * as API from 'api';
import {TeamOverview} from 'pages';


jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: {
            teamName: 'Some Team',
        },
    }),
    useNavigate: () => ({}),
    useParams: () => ({
        teamId: '1',
    }),
}));

const teamOverview = {
    id: '1',
    teamLeadId: '2',
    teamMemberIds: ['3', '4', '5'],
};
const userData = {
    id: '2',
    firstName: 'userData',
    lastName: 'userData',
    displayName: 'userData',
    location: '',
    avatar: '',
};

describe('TeamOverview', () => {
  
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();

    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render team overview users', async () => {
  
        jest.spyOn(API, 'getTeamOverview').mockResolvedValue(teamOverview);
        jest.spyOn(API, 'getUserData').mockResolvedValue(userData);
        
        render(<TeamOverview />);

        await waitFor(() => {
            expect(screen.queryAllByText('userData')).toHaveLength(4);
        });
    });
});
import * as React from 'react';
import {render, screen, waitFor,cleanup,fireEvent} from '@testing-library/react';
import * as API from 'api';
import {Teams} from 'pages';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: {
            firstName: 'Test',
            lastName: 'User',
            displayName: 'userName',
            location: 'location',
        },
    }),
    useNavigate: () => mockedUsedNavigate, 
}));



describe('Teams', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        cleanup();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render spinner while loading', async () => {
        render(<Teams />);    
        const spin = await screen.findByTestId('spinner');
        expect(spin).toBeInTheDocument();
        
    });

    it('should render NotFoundFeedback component when not loading and not results on list', async () => {
        jest.spyOn(API, 'getTeams').mockResolvedValue([
            {
                id: '1',
                name: 'Team1',
            },
            {
                id: '2',
                name: 'Team2',
            },
        ]);
        
        render(<Teams />);

        
        const input = await screen.findByTestId('searchBarInput');
        
        fireEvent.change(input, {target: {value: 'cxcxcx'}});
        const notFoundComponent = await screen.findByTestId('notFoundFeedback');
            
        expect(notFoundComponent).toBeInTheDocument();
        
        
    });

    it('should find only teams that match with serch term', async () => {
        jest.spyOn(API, 'getTeams').mockResolvedValue([
            {
                id: '1',
                name: 'Team1',
            },
            {
                id: '2',
                name: 'Team2',
            },
        ]);
        
        render(<Teams />);
        
        const input = await screen.findByTestId('searchBarInput');
        
        fireEvent.change(input, {target: {value: 'Team1'}});

        await waitFor(() => {
            expect(screen.getByText('Team1')).toBeInTheDocument();
        });
        
        expect(screen.queryByText('Team2')).toBeNull();
    });

    it('should render teams list', async () => {
        jest.spyOn(API, 'getTeams').mockResolvedValue([
            {
                id: '1',
                name: 'Team1',
            },
            {
                id: '2',
                name: 'Team2',
            },
        ]);

        render(<Teams />);

        await waitFor(() => {
            expect(screen.getByText('Team1')).toBeInTheDocument();
        });
        expect(screen.getByText('Team2')).toBeInTheDocument();
    });

    it('should navigate to correct url on click on card', async () => {
        jest.spyOn(API, 'getTeams').mockResolvedValue([
            {
                id: '1',
                name: 'Team1',
            },
            {
                id: '2',
                name: 'Team2',
            },
        ]);
       
        render(<Teams />);

        const card1 = await screen.findByText('Team1');
        
        fireEvent.click(card1);

        expect(mockedUsedNavigate).toHaveBeenCalledWith('/team/1',{'state': {'id': '1','name':'Team1'}});
    });
});

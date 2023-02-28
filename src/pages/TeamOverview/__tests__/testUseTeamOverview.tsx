import {renderHook,act} from '@testing-library/react';
import * as hooks from '../hooks';

const mockUserData = {
  id: '1',
  firstName: 'Test',
  lastName: 'User',
  displayName: 'userName',
  location: 'location',
  avatar: '',
};

const mockUserDataEmpty = {
  id: '1',
  firstName: null,
  lastName: null,
  displayName: null,
  location: null,
  avatar: '',
};

const mockPageData = {
  teamLead: mockUserData,
  teamMembers: [
    {
      id: '2',
      firstName: 'Test2',
      lastName: 'User2',
      displayName: 'userName2',
      location: 'location',
      avatar: '',
    }],
    
};

const expectedRes = [{'key': 'Team Lead', 'value': ''},{'key': 'Name: ', 'value': 'Test User'}, {'key': 'Display Name: ', 'value': 'userName'}, {'key': 'Location: ', 'value': 'location'}];
const expectedResEmpty = [{'key': 'Team Lead', 'value': ''},{'key': 'Name: ', 'value': ' '}, {'key': 'Display Name: ', 'value': ''}, {'key': 'Location: ', 'value': ''}];

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

describe('useTeamOverview', () => {

  it('should execute renderTeamLead correctly', () => {
    const {result} = renderHook(() => hooks.default());

    const {renderTeamLead} = result.current;

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const res = renderTeamLead(mockUserData);
    
    // eslint-disable-next-line testing-library/no-node-access
    expect(res.props.children.props.columns).toMatchObject(expectedRes);
    
  });

  it('should execute validations when no info', () => {
    const {result} = renderHook(() => hooks.default());

    const {renderTeamLead} = result.current;

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const res = renderTeamLead(mockUserDataEmpty);
    
    // eslint-disable-next-line testing-library/no-node-access
    expect(res.props.children.props.columns).toMatchObject(expectedResEmpty);
    
  });

  it('should execute filterList correctly', () => {
    const {result} = renderHook(() => hooks.default());

    const {filterList} = result.current;

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const res = filterList(mockPageData.teamMembers,{currentTarget : {value :  'xxx'}}as any);
    
    // eslint-disable-next-line testing-library/no-node-access
    expect(res).toHaveLength(0);
    
  });

  it('should execute handleFilterTeamMembers correctly when no results', () => {

    const {result} = renderHook(() => hooks.default());

    const {handleFilterTeamMembers,setPageData} = result.current;
    
    act(() => setPageData(mockPageData)
    );
    
    act(() => handleFilterTeamMembers({currentTarget : {value :  'xxx'}}as any,result.current.pageData)
    );
  
    act(() =>
      expect(result.current.filteredTeamLead).toBeNull()
    );

    act(() =>
      expect(result.current.filteredTeamMembers).toHaveLength(0)
    );
  });

  it('should execute handleFilterTeamMembers correctly when possible results', () => {

    const {result} = renderHook(() => hooks.default());

    const {handleFilterTeamMembers,setPageData} = result.current;
    
    act(() => setPageData(mockPageData)
    );
    
    act(() => handleFilterTeamMembers({currentTarget : {value :  'Test'}}as any,result.current.pageData)
    );
  
    act(() =>
      expect(result.current.filteredTeamLead).toMatchObject(mockUserData)
    );

    act(() =>
      expect(result.current.filteredTeamMembers).toHaveLength(1)
    );
  });
});
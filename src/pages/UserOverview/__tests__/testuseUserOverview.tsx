import {renderHook} from '@testing-library/react';
import useUserOverview from '../hooks';

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

const expectedRes = [{'key': 'Name: ', 'value': 'Test User'}, {'key': 'Display Name: ', 'value': 'userName'}, {'key': 'Location: ', 'value': 'location'}];
const expectedResEmpty = [{'key': 'Name: ', 'value': ' '}, {'key': 'Display Name: ', 'value': ''}, {'key': 'Location: ', 'value': ''}];

describe('useUserOverview', () => {
  it('should execute listUsers correctly', () => {
    const {result} = renderHook(() => useUserOverview());

    const {listUsers} = result.current;

    const res = listUsers(mockUserData);
    expect(res.props.columns).toMatchObject(expectedRes);
    
  });

  it('should execute validations when no info', () => {
    const {result} = renderHook(() => useUserOverview());

    const {listUsers} = result.current;

    const res = listUsers(mockUserDataEmpty);
    expect(res.props.columns).toMatchObject(expectedResEmpty);
    
  });
});
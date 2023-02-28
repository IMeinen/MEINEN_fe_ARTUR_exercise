import {renderHook} from '@testing-library/react';
import useTeams from '../hooks';

const mockUserData = [
  {
    id: '1',
    name: 'Team1',
  },
];

const mockUserDataEmpty = [
  {
    id: '1',
    name: null,
  },
];


const expectedRes = [
  {
     'columns':[
        {
           'key':'Name: ',
           'value':'Team1',
        },
     ],
     'id':'1',
     'navigationProps':{
        'id':'1',
        'name':'Team1',
     },
     'url':'/team/1',
  },
];

const expectedResEmpty = [
  {
     'columns':[
        {
           'key':'Name: ',
           'value':'',
        },
     ],
     'id':'1',
     'navigationProps':{
        'id':'1',
        'name':null,
     },
     'url':'/team/1',
  },
];

describe('useTeams', () => {
  it('should execute listTeams correctly', () => {
    const {result} = renderHook(() => useTeams());

    const {listTeams} = result.current;

    const res = listTeams(mockUserData);
    
    expect(res).toMatchObject(expectedRes);

  });

  it('should execute validations when no info', () => {
    const {result} = renderHook(() => useTeams());

    const {listTeams} = result.current;

    const res = listTeams(mockUserDataEmpty);
    
    expect(res).toMatchObject(expectedResEmpty);

  });
});
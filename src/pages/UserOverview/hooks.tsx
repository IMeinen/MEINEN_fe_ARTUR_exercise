import React from 'react';
import {Card} from 'components';
import {UserData} from 'types';

const useUserOverview = () => {
  
    const listUsers = (user: UserData) => {
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
        return <Card columns={columns} hasNavigation={false} navigationProps={user} />;
    };

  return {
    listUsers,
  };
};

export default useUserOverview;
import React from 'react';
import {Spinner, Card} from 'components';
import {GridWraper} from './styles';
import {ListProps} from './types';

const List = ({items, hasNavigation = true, isLoading}: ListProps) => {
    return (

        <GridWraper>
            {isLoading ? 
                <Spinner/>
            : items.map(({url, id, columns, navigationProps}, index) => {
                return (
                    <Card
                        key={`${id}-${index}`}
                        id={id}
                        columns={columns}
                        navigationProps={navigationProps}
                        hasNavigation={hasNavigation}
                        url={url}
                    />
                );
            })}

        </GridWraper>

    );
};

export default List;

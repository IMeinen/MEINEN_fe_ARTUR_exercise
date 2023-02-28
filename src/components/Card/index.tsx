import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Container} from './styles';
import {CardProps} from './types';

const Card = ({
	id,
	columns,
	url,
	hasNavigation = true,
	navigationProps = null,
}: CardProps): JSX.Element => {
  const navigate = useNavigate();

    return (
        <Container
            data-testid={`cardContainer-${id}`}
            hasNavigation={hasNavigation}
            onClick={(e: Event) => {
                if (hasNavigation) {
                    navigate(url, {
                        state: navigationProps,
                    });
                }
                e.preventDefault();
            }}
        >
            {columns.length > 0 && columns.map(({key: columnKey, value}) => (
                columnKey !== null && value !== null && <p key={`${columnKey}-${value}`}>
                    <strong>{`${columnKey}`}</strong>&nbsp;{value}
                </p>
            ))}
        </Container>
    );
};

export default Card;

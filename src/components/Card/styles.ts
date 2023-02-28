import styled from 'styled-components';
import {ContainerProps} from './types';

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    outline: none;
    border: 2px solid #000;
    box-shadow: 3px 4px 0px 1px #000;
    min-width: 250px;
    padding: 12px 10px;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: ${props => (props.hasNavigation ? 'pointer' : 'default')};
    
    ${({hasNavigation}) => hasNavigation && `
    &:hover {
        transform: translateY(4px);
        box-shadow: 1px 2px 0px 0px #000;
    }
  `}

    p {
        strong {
            font-size: 17px;
        }
    }

    @media only screen and (max-width: 396px) {
        width: 220px;
    }

    @media only screen and (min-width: 1360px) {
        max-width: 360px;
    }
`;

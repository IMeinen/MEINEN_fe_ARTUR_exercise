import styled from 'styled-components';

export const GridWraper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;  

    @media only screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    @media only screen and (max-width: 750px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

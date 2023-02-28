import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 100px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 6px solid #000;
    background-color: #39A5F9;
    margin-bottom: 32px;
   
`;

export const Title = styled.h1`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;

    @media only screen and (max-width: 750px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const NavigationHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    outline: 0;
`;

import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;

    @media only screen and (max-width: 750px) {
        font-size: 24px;
    }

    @media only screen and (max-width:480px) {
        font-size: 18px;
    }
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  outline: none;
  border: 2px solid #000;
  box-shadow: 3px 4px 0px 1px #000;
  width: 100%;
  padding: 12px 10px;
  border-radius: 4px;
  background-color: #ffffff;
  margin-bottom: 32px;

  input {
    all: unset;
    width: 100%;
  }
`;

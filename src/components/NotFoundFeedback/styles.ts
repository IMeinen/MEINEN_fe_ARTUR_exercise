import styled from 'styled-components';

export const NotFoundFeedbackContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;

  div {
    display: flex;
    width: fit-content;
  }

  h2 {
    font-size: 36px;
    font-weight: 700;
    margin-right: 16px;

    @media only screen and (max-width: 750px) {
        font-size: 28px;
    }

    @media only screen and (max-width: 618px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;
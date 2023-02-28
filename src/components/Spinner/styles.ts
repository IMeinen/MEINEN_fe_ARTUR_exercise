import styled, {keyframes} from 'styled-components';

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const SpinnerBody = styled.div`
    height: 4rem;
    width: 4rem;
    border: 8px solid;
    border-color: rgba(102, 186, 250, 0.60);
    border-top-color: #39A5F9;
    border-radius: 50%;
    animation: ${spinnerAnimation} 800ms linear infinite;
    position: absolute;
    top: 50%;
    left: calc(50% - 2rem);
  
`;


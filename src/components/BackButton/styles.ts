import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
	cursor: pointer;
	outline: none;
  border: 2px solid #000;
  box-shadow: 3px 4px 0px 1px #000;
  width: 50px;
  height: 50px;
  padding: 12px 10px;
  border-radius: 4px;
  background-color: #ffffff;
  margin-right: 24px;
  
  &:hover {
    transform: translateY(4px);
    box-shadow: 1px 2px 0px 0px #000;
  }
`;
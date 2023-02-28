import React from 'react';
import {TiArrowBack} from 'react-icons/ti';
import {ButtonContainer} from './styles';
import {BackButtonProps} from './types';

const BackButton = ({onClick}: BackButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} data-testid='backbutton'>
      <TiArrowBack size={32} />
    </ButtonContainer>);
};

export default BackButton;
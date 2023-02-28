import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import BackButton from '..';

describe('BackButton', () => {
  it('should render BackButton', () => {
    render(<BackButton/>);
    expect(screen.getByTestId('backbutton')).toBeInTheDocument();
  });

  it('should execute onClick function when clicked', () => {
    const mockedFunc = jest.fn();
    render(<BackButton onClick={mockedFunc}/>);

    fireEvent.click(screen.getByTestId('backbutton'));
    expect(mockedFunc).toHaveBeenCalled();
  });
});
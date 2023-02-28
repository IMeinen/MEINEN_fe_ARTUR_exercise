import React from 'react';
import {render, screen} from '@testing-library/react';
import NotFoundFeedback from '..';


describe('NotFoundFeedback', () => {
  it('should render NotFoundFeedback', () => {
    render(<NotFoundFeedback/>);
    expect(screen.getByTestId('notFoundFeedback')).toBeInTheDocument();
  });
});
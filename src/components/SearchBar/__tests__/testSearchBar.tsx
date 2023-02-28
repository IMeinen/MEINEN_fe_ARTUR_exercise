import React from 'react';
import {render, screen} from '@testing-library/react';
import {SearchBar} from 'components';

describe('SearchBar', () => {
    it('should render SearchBar', () => {
        render(<SearchBar title='search title' placeholder='search placeholder'/>);

        expect(screen.getByTestId('searchBarInput')).toBeInTheDocument();
        expect(screen.getByText('search title')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('search placeholder')).toBeInTheDocument();
    });

    it('should render SearchBar with default placeholder when no placeholder', () => {
      render(<SearchBar title='search title' />);
      expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

});

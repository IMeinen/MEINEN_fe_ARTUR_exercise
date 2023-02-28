import React from 'react';

import {SearchBarContainer,MainContainer} from './styles';
import {SearchBarProps} from './types';

const SearchBar = ({placeholder,title,onChange}: SearchBarProps) => {
    return (
      <MainContainer>
      <h2>{title}</h2>
      <SearchBarContainer>
        <input
            data-testid='searchBarInput'
            type='text' 
            placeholder={placeholder || 'Search'}
            onChange={onChange}
          />
      </SearchBarContainer>
      </MainContainer>
    );
};

export default SearchBar;
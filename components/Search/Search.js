import React from 'react';

import { useAppContext } from '../../context/AppContext';

import styled from 'styled-components';
import styles from './stylesSearch';

import Star from '../Star/Star';
import Brand from '../Brand/Brand';
import SearchInput from '../SearchInput/SearchInput';

const NavBar = styled.nav`
  ${styles.NavBar}
`;

const StarContainer = styled.div`
  ${styles.StarContainer}
`;

const Search = () => {
  const { state, setState } = useAppContext();
  return (
    <NavBar>
      <Brand />
      <SearchInput />
      <StarContainer>
        <Star
          selected={state.filterByFavorites}
          onClick={() =>
            setState({ ...state, filterByFavorites: !state.filterByFavorites })
          }
        />
      </StarContainer>
    </NavBar>
  );
};

export default Search;

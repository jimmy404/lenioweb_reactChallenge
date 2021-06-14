import React from 'react';

import { useAppContext } from '../../context/AppContext';
import useDarkMode from 'use-dark-mode';

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

const ThemeButton = styled.button`
  ${styles.ThemeButton};
`;

const Search = () => {
  const { state, setState } = useAppContext();
  const darkMode = useDarkMode(true);
  return (
    <NavBar>
      <Brand />
      <SearchInput />
      <ThemeButton
        onClick={darkMode.value ? darkMode.disable : darkMode.enable}
      >
        {darkMode.value ? 'Light' : 'Dark'}
      </ThemeButton>
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

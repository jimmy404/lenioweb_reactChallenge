import React from 'react';

import styled from 'styled-components';

import Star from '../Star/Star';
import Brand from '../Brand/Brand';
import SearchInput from '../SearchInput/SearchInput';
import { useAppContext } from '../../context/AppContext';

const NavBar = styled.nav`
  align-items: center;
  background: #fff;
  box-shadow: rgb(0 0 0) 0px 3px 15px -8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 80px;
  min-height: 80px;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const StarContainer = styled.div`
  height: 30px;
  width: 30px;
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

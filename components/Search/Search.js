import React from 'react';

import styled from 'styled-components';

import Star from '../Star/Star';
import Brand from '../Brand/Brand';
import SearchInput from '../SearchInput/SearchInput';

const NavBar = styled.nav`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 80px;
  min-height: 80px;
  padding: 20px 100px 20px 20px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const StarContainer = styled.div`
  height: 30px;
  width: 30px;
`;

const Search = () => {
  return (
    <NavBar>
      <Brand />
      <SearchInput />
      <StarContainer>
        <Star selected={true} />
      </StarContainer>
    </NavBar>
  );
};

export default Search;

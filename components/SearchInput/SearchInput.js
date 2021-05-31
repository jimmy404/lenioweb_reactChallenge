import React from 'react';

import styled from 'styled-components';

const SearchInputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 80%;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 80%;
`;

const SearchIcon = styled.div`
  background-image: url('https://image.flaticon.com/icons/png/512/622/622669.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 15px;
  margin-right: 15px;
  width: 15px;
`;

const SearchInput = () => {
  return (
    <SearchInputContainer>
      <SearchIcon />
      <Input placeholder="Buscar" />
    </SearchInputContainer>
  );
};

export default SearchInput;

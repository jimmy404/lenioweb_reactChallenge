import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import services from '../../services/services';

import { useRouter } from 'next/router';
import { useAppContext } from '../../context/AppContext';

const SearchInputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 80%;
  width: 100%;
`;

const InputContainer = styled.div`
  width: 80%;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
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
  const { state, setState } = useAppContext();

  const router = useRouter();
  const { search = '' } = router.query;

  const [searchValue, setSearchValue] = useState(search);

  useEffect(() => {
    setSearchValue(search);
    if (search) {
      Promise.all([
        services.getHeroes(search),
        services.getComics(search)
      ]).then((responses) => {
        const results = responses.reduce(
          (acc, res) => [...acc, ...res?.data?.data?.results],
          []
        );
        setState({ ...state, gridData: [...results] });
      });
    }
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(searchValue ? `/?search=${searchValue}` : '/');
  };

  const handleChange = (e) => {
    return setSearchValue((e.target.value || '').trim());
  };

  return (
    <SearchInputContainer>
      <SearchIcon />
      <InputContainer>
        <Form onSubmit={handleSearch}>
          <Input
            type="text"
            placeholder="Buscar"
            name="searchText"
            defaultValue={searchValue}
            onChange={handleChange}
          />
        </Form>
      </InputContainer>
    </SearchInputContainer>
  );
};

export default SearchInput;

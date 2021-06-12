import React, { useEffect, useState } from 'react';
import services from '../../services/services';
import { useRouter } from 'next/router';
import { useAppContext } from '../../context/AppContext';

import styled from 'styled-components';
import styles from './stylesSearchInput';

const SearchInputContainer = styled.div`
  ${styles.SearchInputContainer}
`;

const InputContainer = styled.div`
  ${styles.InputContainer}
`;

const Form = styled.form`
  ${styles.Form}
`;

const Input = styled.input`
  ${styles.Input}
`;

const SearchIcon = styled.div`
  ${styles.SearchIcon}
`;

const SearchInput = () => {
  const { state, setState } = useAppContext();

  const router = useRouter();
  const { search = '' } = router.query;

  const [searchValue, setSearchValue] = useState(search);

  useEffect(() => {
    setSearchValue(search);
    if (search) {
      setState({ ...state, isLoading: true });
      const splitedSearch = search.trim().split(',');
      Promise.all([
        ...splitedSearch
          .filter((search) => search.trim() !== '')
          .map((search) => services.getHeroes(search.trim())),
        ...splitedSearch
          .filter((search) => search.trim() !== '')
          .map((search) => services.getComics(search.trim()))
      ])
        .then((responses) => {
          const results = responses.reduce(
            (acc, res) => [...acc, ...res?.data?.data?.results],
            []
          );
          setState({ ...state, gridData: [...results], isLoading: false });
        })
        .catch((err) => {
          setState({ ...state, isLoading: false });
          return console.log('Error fetching data', err);
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

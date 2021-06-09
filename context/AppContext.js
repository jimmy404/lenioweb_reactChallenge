import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let initialState = {
    gridData: [],
    heroComics: [],
    heroesStars:
      (typeof window !== 'undefined' &&
        JSON.parse(localStorage.getItem('heroesStars'))) ||
      [],
    comicsStars:
      (typeof window !== 'undefined' &&
        JSON.parse(localStorage.getItem('comicsStars'))) ||
      [],
    showModal: false,
    filterByFavorites: false,
    selectedHero: {},
    theme: ''
  };

  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

AppWrapper.propTypes = {
  children: PropTypes.object
};

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
    gridData: [],
    heroComics: [],
    heroesStars: [],
    comicsStars: [],
    showModal: false,
    theme: ''
  };

  const [state, setState] = useState(sharedState);

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

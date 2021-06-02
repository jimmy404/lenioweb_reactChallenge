import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  let sharedState = {};

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
};

AppWrapper.propTypes = {
  children: PropTypes.object
};

export function useAppContext() {
  return useContext(AppContext);
}

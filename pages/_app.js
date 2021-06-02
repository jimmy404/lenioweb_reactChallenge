import React from 'react';
import PropTypes from 'prop-types';

import '../styles/globals.css';
import { AppWrapper } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default MyApp;

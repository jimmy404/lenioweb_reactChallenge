import React from 'react';
import PropTypes from 'prop-types';

import { createGlobalStyle } from 'styled-components';

import '../styles/globals.css';
import { AppWrapper } from '../context/AppContext';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #DCDCDC;
	}
`;

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppWrapper>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default MyApp;

import React from 'react';
import PropTypes from 'prop-types';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import '../styles/globals.css';
import { AppWrapper } from '../context/AppContext';
import { defaultTheme } from '../theme';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.appBackgroundColor};
	}
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppWrapper>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default MyApp;

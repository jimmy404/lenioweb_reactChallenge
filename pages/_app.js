import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useDarkMode from 'use-dark-mode';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import '../styles/globals.css';
import { AppWrapper } from '../context/AppContext';
import { lightTheme, darkTheme } from '../theme';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.appBackgroundColor};
	}
`;

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        {isMounted && <Component {...pageProps} />}
      </AppWrapper>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default MyApp;

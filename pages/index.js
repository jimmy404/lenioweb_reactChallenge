import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Head from 'next/head';
import Search from '../components/Search/Search';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #DCDCDC;
	}
`;

const MainContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
`;

export default function Home() {
  return (
    <MainContainer>
      <Head>
        <title>Marvel Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Search />
    </MainContainer>
  );
}

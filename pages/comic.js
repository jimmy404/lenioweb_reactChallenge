import React from 'react';

import styled from 'styled-components';
import ComicDetail from '../components/ComicDetail/ComicDetail';
import Search from '../components/Search/Search';

const ComicPageContainer = styled.div``;

const ComicPage = () => {
  return (
    <ComicPageContainer>
      <Search />
      <ComicDetail />
    </ComicPageContainer>
  );
};

export default ComicPage;

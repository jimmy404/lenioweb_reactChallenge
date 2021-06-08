import React from 'react';

import styled from 'styled-components';
import ComicDetail from '../components/ComicDetail/ComicDetail';

const ComicPageContainer = styled.div``;

const ComicPage = () => {
  return (
    <ComicPageContainer>
      <ComicDetail />
      <p>Pagina ComicPage</p>
    </ComicPageContainer>
  );
};

export default ComicPage;

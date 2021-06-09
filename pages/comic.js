import React from 'react';

import { useRouter } from 'next/router';
import { useAppContext } from '../context/AppContext';

import moment from 'moment';

import styled from 'styled-components';
import DetailCard from '../components/DetailCard/DetailCard';
import Search from '../components/Search/Search';

const ComicPageContainer = styled.div`
  height: calc(100vh - 80px);
  margin-top: 80px;
  width: 100vw;
`;

const ComicPage = () => {
  const router = useRouter();
  const { id = '' } = router.query;

  const { state } = useAppContext();

  const comic = state.heroComics.find((comic) => {
    return comic.id == id;
  });

  const publishedDate = comic?.dates?.find?.(
    (date) => date?.type === 'onsaleDate'
  )?.date;

  const parsedDate = moment(publishedDate).format('MMM DD, YYYY');

  const writer = comic?.creators?.items?.find?.(
    (creator) => creator.role === 'writer'
  )?.name;

  const penciler = comic?.creators?.items?.find?.(
    (creator) => creator?.role === 'penciler (cover)'
  )?.name;

  const coverArtist = comic?.creators?.items?.find?.(
    (creator) => creator?.role === 'penciler (cover)'
  )?.name;

  return (
    <ComicPageContainer>
      <Search />
      <DetailCard
        url={comic?.thumbnail?.path + '.' + comic?.thumbnail?.extension}
        title={comic.title}
        description={comic.description}
        favorite={state.comicsStars.indexOf(comic.id) > -1}
        // onCardClick={}
        // onStarClick={}
        published={parsedDate}
        writer={writer}
        penciler={penciler}
        coverArtist={coverArtist}
      />
    </ComicPageContainer>
  );
};

export default ComicPage;

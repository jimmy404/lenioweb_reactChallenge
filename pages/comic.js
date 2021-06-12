import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useAppContext } from '../context/AppContext';

import moment from 'moment';
import services from '../services/services';

import styled from 'styled-components';
import DetailCard from '../components/DetailCard/DetailCard';
import Search from '../components/Search/Search';

const ComicPageContainer = styled.div`
  height: calc(100vh - 80px);
  margin-top: 80px;
  padding: 60px;
  width: 100vw;
`;

const ComicPage = () => {
  const router = useRouter();
  const { id = '' } = router.query;

  const { state, setState } = useAppContext();

  const comic = state.heroComics.find((comic) => {
    return comic?.id == id;
  });

  useEffect(() => {
    if (!comic && id) {
      setState({ ...state, isLoading: true });
      services.getComic(id).then((res) => {
        const results = res?.data?.data?.results || [];
        setState({ ...state, heroComics: results, isLoading: false });
      });
    }
  }, [id]);

  const publishedDate = comic?.dates?.find?.(
    (date) => date?.type === 'onsaleDate'
  )?.date;

  const parsedDate = moment(publishedDate).format('MMM DD, YYYY');

  const writer = comic?.creators?.items?.find?.(
    (creator) => creator?.role === 'writer'
  )?.name;

  const penciler = comic?.creators?.items?.find?.(
    (creator) => creator?.role === 'penciler (cover)'
  )?.name;

  const coverArtist = comic?.creators?.items?.find?.(
    (creator) => creator?.role === 'penciler (cover)'
  )?.name;

  const setFavorites = (id) => {
    let favs = [...(state?.comicsStars || [])];
    const idIndex = favs?.indexOf(id);
    if (idIndex === -1) {
      favs.push(id);
    } else {
      favs.splice(idIndex, 1);
    }
    localStorage.setItem('comicsStars', JSON.stringify(favs));
    return setState({ ...state, comicsStars: favs });
  };

  return (
    <>
      <Search />
      <ComicPageContainer>
        <DetailCard
          url={comic?.thumbnail?.path + '.' + comic?.thumbnail?.extension}
          title={comic?.title}
          description={comic?.description}
          favorite={state?.comicsStars?.indexOf(comic?.id) > -1}
          published={parsedDate}
          onStarClick={() => setFavorites(comic?.id)}
          writer={writer}
          penciler={penciler}
          coverArtist={coverArtist}
          isPreview={true}
        />
      </ComicPageContainer>
    </>
  );
};

export default ComicPage;

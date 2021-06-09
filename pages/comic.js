import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useAppContext } from '../context/AppContext';

import moment from 'moment';
import axios from 'axios';

import styled from 'styled-components';
import DetailCard from '../components/DetailCard/DetailCard';
import Search from '../components/Search/Search';

const ComicPageContainer = styled.div`
  height: calc(100vh - 80px);
  margin-top: 80px;
  padding: 40px;
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
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/comics/${id}?&ts=1&apikey=6c915ef1dcee8a56cc163a02592aad2d&hash=a85ef61e3494356c56e955d2ac0974f0`
        )
        .then((res) => {
          const results = res?.data?.data?.results || [];
          setState({ ...state, heroComics: results });
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

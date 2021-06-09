import React, { useEffect } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import { useAppContext } from '../context/AppContext';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Search from '../components/Search/Search';
import CardGrid from '../components/CardGrid/CardGrid';
import Modal from '../components/Modal/Modal';
import DetailCardList from '../components/DetailCardList/DetailCardList';

const MainContainer = styled.div`
  height: calc(100vh - 80px);
  margin-top: 80px;
  width: 100vw;
`;

const Home = () => {
  const { state, setState } = useAppContext();

  const router = useRouter();
  const { search = '' } = router.query;

  const goToComic = (id) => {
    setState({ ...state, showModal: false });
    return router.push(`/comic/?id=${id}`);
  };

  const getRandomCharacter = (gridDataList) => {
    return gridDataList[Math.floor(Math.random() * gridDataList.length)] || {};
  };

  useEffect(() => {
    if (!search) {
      const randomCharacter = () => {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        return characters[Math.floor(Math.random() * characters.length)];
      };

      return axios
        .get(
          `https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${randomCharacter()}&ts=1&apikey=6c915ef1dcee8a56cc163a02592aad2d&hash=a85ef61e3494356c56e955d2ac0974f0`
        )
        .then((res) => {
          const results = res?.data?.data?.results || [];
          const character = getRandomCharacter(results);
          return axios
            .get(
              `https://gateway.marvel.com:443/v1/public/characters/${character.id}/comics?limit=100&ts=1&apikey=6c915ef1dcee8a56cc163a02592aad2d&hash=a85ef61e3494356c56e955d2ac0974f0`
            )
            .then((res) => {
              const comicList = res?.data?.data?.results || [];
              setState({
                ...state,
                gridData: [character, ...comicList],
                heroComics: comicList
              });
            });
        });
    }
  }, [search]);

  const setFavorites = (id, key) => {
    let favs = [...(state?.[key] || [])];
    const idIndex = favs?.indexOf(id);
    if (idIndex === -1) {
      favs.push(id);
    } else {
      favs.splice(idIndex, 1);
    }
    localStorage.setItem(key, JSON.stringify(favs));
    return setState({ ...state, [key]: favs });
  };

  const fetchComics = (id) => {
    return axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=100&ts=1&apikey=6c915ef1dcee8a56cc163a02592aad2d&hash=a85ef61e3494356c56e955d2ac0974f0`
      )
      .then((res) => {
        const comicList = res?.data?.data?.results || [];
        const selectedHero = state.gridData.find((hero) => {
          return hero.id == id;
        });
        setState({
          ...state,
          heroComics: comicList,
          showModal: true,
          selectedHero
        });
      });
  };

  return (
    <MainContainer>
      <Head>
        <title>Marvel Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
      {state?.gridData?.length ? (
        <CardGrid
          onCardClick={(id) => fetchComics(id)}
          onStarClick={(id) => setFavorites(id, 'heroesStars')}
          onComicStarClick={(id) => setFavorites(id, 'comicsStars')}
          onComicCardClick={(id) => goToComic(id)}
          favs={
            search
              ? state.heroesStars
              : [...(state?.heroesStars || []), ...(state?.comicsStars || [])]
          }
          heroes={state.gridData}
          hasBanner={!search}
          filterByFavorites={state.filterByFavorites}
        />
      ) : (
        <p>Hero not found, try again</p>
      )}
      {state.showModal && (
        <Modal
          title={state?.selectedHero?.name}
          onCloseClick={() => setState({ ...state, showModal: false })}
        >
          <DetailCardList
            favs={state.comicsStars}
            data={state.heroComics}
            onCardClick={(id) => goToComic(id)}
            onStarClick={(id) => setFavorites(id, 'comicsStars')}
          />
        </Modal>
      )}
    </MainContainer>
  );
};

export default Home;

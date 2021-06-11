import React, { useEffect } from 'react';

import styled from 'styled-components';
import services from '../services/services';

import { useAppContext } from '../context/AppContext';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Search from '../components/Search/Search';
import CardGrid from '../components/CardGrid/CardGrid';
import Modal from '../components/Modal/Modal';
import DetailCardList from '../components/DetailCardList/DetailCardList';
import DataMissingFeedback from '../components/DataMissingFeedback/DataMissingFeedback';
import Loading from '../components/Loading/Loading';

const MainContainer = styled.div`
  height: calc(100vh - 80px);
  margin-top: 80px;
  width: 100vw;
`;

const ModalFeedbackContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  min-height: 200px;
  justify-content: center;
  align-items: center;
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
      setState({ ...state, isLoading: true });
      const randomCharacter = () => {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        return characters[Math.floor(Math.random() * characters.length)];
      };

      return services.getHeroes(randomCharacter()).then((res) => {
        const results = res?.data?.data?.results || [];
        const character = getRandomCharacter(results);
        return services.getHeroComics(character.id).then((res) => {
          const comicList = res?.data?.data?.results || [];
          setState({
            ...state,
            gridData: [character, ...comicList],
            heroComics: comicList,
            isLoading: false
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
    setState({ ...state, isHeroComicListLoading: true, showModal: true });
    return services.getHeroComics(id).then((res) => {
      const comicList = res?.data?.data?.results || [];
      const selectedHero = state.gridData.find((hero) => {
        return hero.id == id;
      });
      setState({
        ...state,
        heroComics: comicList,
        isHeroComicListLoading: false,
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
      {state.isLoading ? (
        <Loading />
      ) : state?.gridData?.length ? (
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
        <DataMissingFeedback message="Hero not found." />
      )}
      {state.showModal && (
        <Modal
          title={state?.selectedHero?.name}
          onCloseClick={() => setState({ ...state, showModal: false })}
        >
          {state.isHeroComicListLoading ? (
            <Loading />
          ) : state.heroComics.length ? (
            <DetailCardList
              favs={state.comicsStars}
              data={state.heroComics}
              onCardClick={(id) => goToComic(id)}
              onStarClick={(id) => setFavorites(id, 'comicsStars')}
            />
          ) : (
            <ModalFeedbackContainer>
              <DataMissingFeedback message="No comics found." />
            </ModalFeedbackContainer>
          )}
        </Modal>
      )}
    </MainContainer>
  );
};

export default Home;

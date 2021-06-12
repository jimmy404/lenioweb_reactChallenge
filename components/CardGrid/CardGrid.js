import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

import Card from '../Card/Card';

const CardGridContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  grid-gap: 20px;
  max-width: 860px;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardGridItem = styled.li`
  max-width: 200px;

  ${(props) => css`
    grid-column: ${props.isBanner ? '1 / 2' : 'auto'};
    grid-row: ${props.isBanner ? '1' : 'auto'};
  `};

  @media (min-width: 500px) {
    max-width: initial;
    ${(props) => css`
      grid-column: ${props.isBanner ? '1 / 3' : 'auto'};
    `}
  }

  @media (min-width: 768px) {
    ${(props) => css`
      grid-column: ${props.isBanner ? '1 / 4' : 'auto'};
    `}
  }

  @media (min-width: 960px) {
    ${(props) => css`
      grid-column: ${props.isBanner ? '1 / 5' : 'auto'};
    `}
  }
`;

const CardGrid = ({
  heroes,
  selected,
  onCardClick,
  onStarClick,
  onComicStarClick,
  hasBanner,
  filterByFavorites,
  onComicCardClick,
  favs
}) => {
  const renderCards = () => {
    return heroes
      .filter((hero) => !filterByFavorites || favs.indexOf(hero.id) > -1)
      .map((hero, index) => {
        const isComic = !!hero?.format;
        return (
          <CardGridItem
            key={`CardGrid_Card_${index}`}
            isBanner={hasBanner && index === 0}
          >
            <Card
              isBanner={hasBanner && index === 0}
              onCardClick={
                isComic
                  ? () => onComicCardClick(hero.id)
                  : () => onCardClick(hero.id)
              }
              onStarClick={
                isComic
                  ? () => onComicStarClick(hero.id)
                  : () => onStarClick(hero.id)
              }
              title={hero?.name || hero?.title}
              favorite={favs.indexOf(hero.id) > -1}
              url={hero?.thumbnail?.path + '.' + hero?.thumbnail?.extension}
            />
          </CardGridItem>
        );
      });
  };

  return (
    <CardGridContainer selected={selected}>{renderCards()}</CardGridContainer>
  );
};

CardGrid.propTypes = {
  heroes: PropTypes.array,
  favs: PropTypes.array,
  onCardClick: PropTypes.func,
  onStarClick: PropTypes.func,
  onComicStarClick: PropTypes.func,
  onComicCardClick: PropTypes.func,
  selected: PropTypes.bool,
  filterByFavorites: PropTypes.bool,
  hasBanner: PropTypes.bool
};

CardGrid.defaultProps = {
  heroes: [],
  favs: [],
  onCardClick: () => {},
  onStarClick: () => {},
  onComicStarClick: () => {},
  onComicCardClick: () => {},
  selected: false,
  filterByFavorites: false,
  hasBanner: false
};

export default CardGrid;

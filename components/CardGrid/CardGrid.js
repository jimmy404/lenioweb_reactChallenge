import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

import Card from '../Card/Card';

const CardGridContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
  grid-gap: 20px;
  max-width: 860px;
`;

const CardGridItem = styled.li`
  ${(props) => css`
    grid-column: ${props.isBanner ? '1 / 5' : 'auto'};
    grid-row: ${props.isBanner ? '1' : 'auto'};
  `};
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

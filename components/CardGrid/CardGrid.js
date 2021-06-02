import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
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
`;

const CardGrid = ({ heroes, selected, onClick }) => {
  const renderCards = () => {
    return heroes.map((hero, index) => {
      return (
        <li key={`CardGrid_Card_${index}`}>
          <Card
            onClick={() => alert('Click container')}
            onStarClick={() => alert('Click Star')}
            title={hero?.name}
            favorite={false}
            url={hero?.thumbnail?.path + '.' + hero?.thumbnail?.extension}
          />
        </li>
      );
    });
  };

  return (
    <CardGridContainer selected={selected} onClick={onClick}>
      {renderCards()}
    </CardGridContainer>
  );
};

CardGrid.propTypes = {
  heroes: PropTypes.array,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

CardGrid.defaultProps = {
  heroes: [],
  onClick: () => {},
  selected: false
};

export default CardGrid;

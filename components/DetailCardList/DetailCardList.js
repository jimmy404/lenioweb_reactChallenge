import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetailCard from '../DetailCard/DetailCard';

const CardListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const renderItems = ({ list, onCardClick, onStarClick, favs }) => {
  return list.map((item, itemIndex) => (
    <DetailCard
      onCardClick={() => onCardClick(item.id)}
      onStarClick={() => onStarClick(item.id)}
      title={item.title}
      key={`CardListContainer_Item_${item.id}_${itemIndex}`}
      url={item?.thumbnail?.path + '.' + item?.thumbnail?.extension}
      description={item?.description}
      favorite={favs.indexOf(item.id) > -1}
    />
  ));
};

const DetailCardList = ({ data, onCardClick, onStarClick, favs }) => {
  return (
    <CardListContainer>
      {renderItems({
        list: data,
        onCardClick: onCardClick,
        onStarClick: onStarClick,
        favs
      })}
    </CardListContainer>
  );
};

DetailCardList.propTypes = {
  data: PropTypes.array,
  onCardClick: PropTypes.func,
  onStarClick: PropTypes.func,
  favs: PropTypes.array
};

DetailCardList.defaultProps = {
  data: [],
  onCardClick: () => {},
  onStarClick: () => {},
  favs: []
};

export default DetailCardList;

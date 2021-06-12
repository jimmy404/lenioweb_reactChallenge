import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import styles from './stylesCard';

import Star from '../Star/Star';

const CardContainer = styled.div`
  ${styles.CardContainer}
`;

const Title = styled.h3`
  ${styles.Title}
`;

const StarContainer = styled.div`
  ${styles.StarContainer}
`;

const Card = ({ title, favorite, url, onCardClick, onStarClick, isBanner }) => {
  const handleStarClick = (e) => {
    e.stopPropagation();
    return onStarClick();
  };

  const imgNotFound = url.indexOf('image_not_available') > -1;

  return (
    <CardContainer
      url={url}
      onClick={onCardClick}
      imgNotFound={imgNotFound}
      isBanner={isBanner}
    >
      <StarContainer>
        <Star selected={favorite} onClick={handleStarClick} />
      </StarContainer>
      <Title>{title}</Title>
    </CardContainer>
  );
};

Card.propTypes = {
  favorite: PropTypes.bool,
  onCardClick: PropTypes.func,
  onStarClick: PropTypes.func,
  title: PropTypes.string,
  url: PropTypes.string,
  isBanner: PropTypes.bool
};

Card.defaultProps = {
  favorite: false,
  onCardClick: () => {},
  onStarClick: () => {},
  title: '',
  url: '',
  isBanner: false
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import Star from '../Star/Star';

const CardContainer = styled.div`
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  padding: 10px;

  ${(props) => css`
    background-image: url(${props.url});
    background-position: ${props.imgNotFound ? 'bottom left' : 'center'};
    width: ${props.isBanner ? '860px' : '200px'};
  `};
`;

const Title = styled.h3`
  color: white;
  margin: 0;
  text-shadow: 0px 0px 4px black;
  width: 100%;
`;

const StarContainer = styled.div`
  height: 20px;
  width: 20px;
`;

const Card = ({ title, favorite, url, onClick, onStarClick, isBanner }) => {
  const handleStarClick = (e) => {
    e.stopPropagation();
    return onStarClick();
  };

  const imgNotFound = url.indexOf('image_not_available') > -1;

  return (
    <CardContainer
      url={url}
      onClick={onClick}
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
  onClick: PropTypes.func,
  onStarClick: PropTypes.func,
  title: PropTypes.string,
  url: PropTypes.string,
  isBanner: PropTypes.bool
};

Card.defaultProps = {
  favorite: false,
  onClick: () => {},
  onStarClick: () => {},
  title: '',
  url: '',
  isBanner: false
};

export default Card;

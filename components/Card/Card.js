import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import Star from '../Star/Star';

const CardContainer = styled.div`
  align-items: flex-end;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  padding: 10px;
  width: 200px;

  ${(props) => css`
    background-image: url(${props.url});
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

const Card = ({ title, favorite, url, onClick, onStarClick }) => {
  const handleStarClick = (e) => {
    e.stopPropagation();
    return onStarClick();
  };

  return (
    <CardContainer url={url} onClick={onClick}>
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
  url: PropTypes.string
};

Card.defaultProps = {
  favorite: false,
  onClick: () => {},
  onStarClick: () => {},
  title: '',
  url: ''
};

export default Card;

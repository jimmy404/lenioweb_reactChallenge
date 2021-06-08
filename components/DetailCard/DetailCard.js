import React from 'react';

import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import Star from '../Star/Star';

const DetailCardContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ComicImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  display: flex;
  height: 100px;
  width: 100px;

  ${(props) => css`
    background-image: url(${props.url});
  `};
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

const RigthPanel = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 100px);
  padding: 8px;
`;

const StarContainer = styled.div`
  margin-left: 10px;
  height: 20px;
  width: 20px;
`;

const DescriptionContainer = styled.p`
  margin: 0;
`;

const TitleContainer = styled.h3`
  font-size: 15px;
  margin-bottom: 10px;
  margin: 0;
`;

const DetailCard = ({
  url,
  title,
  description,
  favorite,
  onCardClick,
  onStarClick
}) => {
  const handleStarClick = (e) => {
    e.stopPropagation();
    return onStarClick();
  };

  return (
    <DetailCardContainer onClick={onCardClick}>
      <ComicImage url={url} />
      <RigthPanel>
        <MainContainer>
          <TitleContainer>{title}</TitleContainer>
          <StarContainer>
            <Star selected={favorite} onClick={handleStarClick} />
          </StarContainer>
        </MainContainer>
        <DescriptionContainer>{description}</DescriptionContainer>
      </RigthPanel>
    </DetailCardContainer>
  );
};

DetailCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  favorite: PropTypes.bool,
  onCardClick: PropTypes.func,
  onStarClick: PropTypes.func
};

DetailCard.defaultProps = {
  url: '',
  title: '',
  description: '',
  favorite: false,
  onCardClick: () => {},
  onStarClick: () => {}
};

export default DetailCard;

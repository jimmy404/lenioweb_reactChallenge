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
  border-radius: 4px;
  display: flex;

  ${(props) => css`
    background-image: url(${props.url});
    background-size: ${props.isPreview ? 'contain' : 'cover'};
    height: ${props.isPreview ? '450px' : '100px'};
    margin-right: ${props.isPreview ? '10px' : 'initial'};
    width: ${props.isPreview ? '300px' : '100px'};
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
  padding: 8px;

  ${(props) => css`
    max-width: calc(100% - ${props.isPreview ? '300' : '100'}px);
  `};
`;

const StarContainer = styled.div`
  height: 20px;
  margin-left: 10px;
  width: 20px;
`;

const DataContainer = styled.div`
  margin: 20px 0;
  padding: 0;
`;

const Data = styled.p`
  font-weight: bold;
`;

const DescriptionContainer = styled.p`
  margin: 0;
`;

const TitleContainer = styled.h3`
  margin-bottom: 10px;
  margin: 0;

  ${(props) => css`
    font-size: ${props.isPreview ? '24px' : '15px'};
  `};
`;

const DetailCard = ({
  url,
  title,
  description,
  favorite,
  onCardClick,
  onStarClick,
  published,
  writer,
  penciler,
  coverArtist,
  isPreview
}) => {
  const handleStarClick = (e) => {
    e.stopPropagation();
    return onStarClick();
  };

  return (
    <DetailCardContainer onClick={onCardClick}>
      <ComicImage url={url} isPreview={isPreview} />
      <RigthPanel isPreview={isPreview}>
        <MainContainer>
          <TitleContainer isPreview={isPreview}>{title}</TitleContainer>
          <StarContainer>
            <Star selected={favorite} onClick={handleStarClick} />
          </StarContainer>
        </MainContainer>
        <DataContainer>
          {published && <Data>Published: {published}</Data>}
          {writer && <Data>Writer: {writer}</Data>}
          {penciler && <Data>Penciler: {penciler}</Data>}
          {coverArtist && <Data>Cover Artist: {coverArtist}</Data>}
        </DataContainer>
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
  onStarClick: PropTypes.func,
  published: PropTypes.string,
  writer: PropTypes.string,
  penciler: PropTypes.string,
  coverArtist: PropTypes.string,
  isPreview: PropTypes.bool
};

DetailCard.defaultProps = {
  url: '',
  title: '',
  description: '',
  favorite: false,
  onCardClick: () => {},
  onStarClick: () => {},
  published: '',
  writer: '',
  penciler: '',
  coverArtist: '',
  isPreview: false
};

export default DetailCard;

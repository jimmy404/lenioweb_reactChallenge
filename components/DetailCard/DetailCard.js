import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import styles from './stylesDetailCard';

import Star from '../Star/Star';

const DetailCardContainer = styled.div`
  ${styles.DetailCardContainer}
`;

const ComicImage = styled.div`
  ${styles.ComicImage}
`;

const MainContainer = styled.div`
  ${styles.MainContainer}
`;

const RigthPanel = styled.div`
  ${styles.RigthPanel}
`;

const StarContainer = styled.div`
  ${styles.StarContainer}
`;

const DataContainer = styled.div`
  ${styles.DataContainer}
`;

const Data = styled.p`
  ${styles.Data}
`;

const DescriptionContainer = styled.p`
  ${styles.DescriptionContainer}
`;

const TitleContainer = styled.h3`
  ${styles.TitleContainer}
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
    <DetailCardContainer onClick={onCardClick} isPreview={isPreview}>
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

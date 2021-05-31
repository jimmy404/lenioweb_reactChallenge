import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const StarContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 100%;
  width: 100%;

  ${(props) => css`
    background-image: url(${props.selected
      ? 'https://image.flaticon.com/icons/png/512/1828/1828614.png'
      : 'https://image.flaticon.com/icons/png/512/1828/1828970.png'});
  `}
`;

const Star = ({ selected }) => {
  return <StarContainer selected={selected} />;
};

Star.propTypes = {
  selected: PropTypes.bool
};

Star.defaultProps = {
  selected: false
};

export default Star;

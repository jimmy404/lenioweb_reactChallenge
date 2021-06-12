import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const StarContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 100%;
  min-width: 30px;
  width: 100%;

  ${(props) => css`
    background-image: url(${props.selected
      ? 'https://image.flaticon.com/icons/png/512/1828/1828614.png'
      : 'https://image.flaticon.com/icons/png/512/1828/1828970.png'});
  `}
`;

const Star = ({ selected, onClick }) => {
  return <StarContainer selected={selected} onClick={onClick} />;
};

Star.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

Star.defaultProps = {
  onClick: () => {},
  selected: false
};

export default Star;

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import styles from './stylesStar';

const StarContainer = styled.div`
  ${styles.StarContainer}
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

import React from 'react';

import styled from 'styled-components';
import styles from './stylesLoading';

const LoadingContainer = styled.div`
  ${styles.LoadingContainer}
`;

const Loading = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

export default Loading;

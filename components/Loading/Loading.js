import React from 'react';

import styled from 'styled-components';

const LoadingContainer = styled.div`
  align-items: center;
  color: #000;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Loading = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

export default Loading;

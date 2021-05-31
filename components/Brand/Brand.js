import React from 'react';

import styled from 'styled-components';

const BrandContainer = styled.a`
  background-image: url('https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 40px;
  width: 115px;
`;

const Brand = () => {
  return <BrandContainer href="/" />;
};

export default Brand;

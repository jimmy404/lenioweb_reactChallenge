import React from 'react';

import { useRouter } from 'next/router';

import styled from 'styled-components';
import styles from './stylesBrand';

const BrandContainer = styled.a`
  ${styles.BrandContainer}
`;

const Brand = () => {
  const router = useRouter();
  return <BrandContainer onClick={() => router.push(`/`)} />;
};

export default Brand;

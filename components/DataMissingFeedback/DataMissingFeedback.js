import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import styles from './stylesDataMissingFeedback';

const DataMissingFeedbackContainer = styled.div`
  ${styles.DataMissingFeedbackContainer}
`;

const DataMissingFeedbackContent = styled.div`
  ${styles.DataMissingFeedbackContent}
`;

const DataMissingFeedback = ({ message }) => {
  return (
    <DataMissingFeedbackContainer>
      <DataMissingFeedbackContent>{message}</DataMissingFeedbackContent>
    </DataMissingFeedbackContainer>
  );
};

DataMissingFeedback.propTypes = {
  message: PropTypes.string
};

DataMissingFeedback.defaultProps = {
  message: ''
};

export default DataMissingFeedback;

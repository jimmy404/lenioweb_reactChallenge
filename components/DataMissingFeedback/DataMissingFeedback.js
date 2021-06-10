import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const DataMissingFeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DataMissingFeedbackContent = styled.div`
  background-color: white;
  border-radius: 4px;
  margin: 0;
  max-height: 80%;
  max-width: 650px;
  min-height: 200px;
  padding: 0;
  width: 60%;
  text-align: center;
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

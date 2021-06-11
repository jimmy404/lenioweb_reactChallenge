import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const DataMissingFeedbackContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const DataMissingFeedbackContent = styled.div`
  background-color: white;
  border-radius: 4px;
  color: #f0141e;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
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

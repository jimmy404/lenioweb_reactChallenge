import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: red;
`;

const Modal = ({ children }) => {
  return <ModalContainer>{children}</ModalContainer>;
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.array
  ])
};

Modal.defaultProps = {
  children: null
};

export default Modal;

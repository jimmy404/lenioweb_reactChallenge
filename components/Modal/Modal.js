import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  margin: 0;
  max-height: 80%;
  max-width: 450px;
  min-height: 200px;
  width: 80%;
`;

const ModalCurtain = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Modal = ({ children }) => {
  return (
    <ModalCurtain>
      <ModalContainer>{children}</ModalContainer>;
    </ModalCurtain>
  );
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

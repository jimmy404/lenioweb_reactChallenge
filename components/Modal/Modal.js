import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  margin: 0;
  max-height: 80%;
  max-width: 650px;
  min-height: 200px;
  padding: 0;
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

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 64px;
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 10px;
`;

const CloseModal = styled.button`
  align-items: flex-start;
  background: none;
  border: none;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
`;

const ModalContent = styled.section`
  max-height: calc(80vh - 64px);
  overflow-y: auto;
  padding: 16px;
`;

const Modal = ({ children, title, onCloseClick }) => {
  return (
    <ModalCurtain>
      <ModalContainer>
        <ModalHeader>
          <Title>{title}</Title>
          <CloseModal onClick={onCloseClick}>X</CloseModal>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalCurtain>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.array
  ]),
  title: PropTypes.string,
  onCloseClick: PropTypes.func
};

Modal.defaultProps = {
  children: null,
  title: '',
  onCloseClick: () => {}
};

export default Modal;

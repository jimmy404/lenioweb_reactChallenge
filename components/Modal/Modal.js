import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import styles from './stylesModal';

const ModalContainer = styled.div`
  ${styles.ModalContainer}
`;

const ModalCurtain = styled.div`
  ${styles.ModalCurtain}
`;

const ModalHeader = styled.div`
  ${styles.ModalHeader}
`;

const Title = styled.h2`
  ${styles.Title}
`;

const CloseModal = styled.button`
  ${styles.CloseModal}
`;

const ModalContent = styled.section`
  ${styles.ModalContent}
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

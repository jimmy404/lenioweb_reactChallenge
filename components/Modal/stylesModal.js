import { css } from 'styled-components';

const styles = {
  ModalContainer: css`
    background-color: white;
    border-radius: 4px;
    margin: 0;
    max-height: 80%;
    max-width: 650px;
    min-height: 200px;
    padding: 0;
    width: 80%;
  `,
  ModalCurtain: css`
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
  `,
  ModalHeader: css`
    box-shadow: 0px 3px 15px -8px #000000;
    display: flex;
    justify-content: space-between;
    max-height: 64px;
    padding: 16px;
  `,
  Title: css`
    margin-right: 10px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  CloseModal: css`
    align-items: flex-start;
    background: none;
    border: none;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    line-height: 1;
  `,
  ModalContent: css`
    max-height: calc(80vh - 64px);
    overflow-y: auto;
    padding: 16px;
  `
};

export default styles;

import { css } from 'styled-components';

const styles = {
  ModalContainer: css`
    background-color: ${(props) => props.theme.backgroundModal};
    border-radius: ${(props) => props.theme.borderRadiusModal};
    margin: 0;
    max-height: 80%;
    max-width: 650px;
    min-height: 200px;
    padding: 0;
    width: 80%;
  `,
  ModalCurtain: css`
    align-items: center;
    background-color: ${(props) => props.theme.backgroundModalCurtain};
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
    box-shadow: ${(props) => props.theme.boxShadowModalHeader};
    display: flex;
    justify-content: space-between;
    max-height: ${(props) => props.theme.maxHeightModalHeader};
    padding: ${(props) => props.theme.paddingModalHeader};
  `,
  Title: css`
    margin-right: ${(props) => props.theme.marginRightModalTitle};
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
    font-size: ${(props) => props.theme.fontSizeModalClose};
    font-weight: bold;
    line-height: 1;
  `,
  ModalContent: css`
    max-height: calc(80vh - 64px);
    overflow-y: auto;
    padding: ${(props) => props.theme.paddingModalContent};
  `
};

export default styles;

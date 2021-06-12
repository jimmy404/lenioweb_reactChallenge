import { css } from 'styled-components';

const styles = {
  MainContainer: css`
    height: calc(100vh - 80px);
    margin-top: 80px;
    width: 100vw;
  `,
  MainContentContainer: css`
    align-items: flex-start;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 60px;
    width: 100%;
  `,
  ModalFeedbackContainer: css`
    align-items: center;
    display: flex;
    height: 200px;
    justify-content: center;
    min-height: 200px;
    width: 100%;
  `
};

export default styles;

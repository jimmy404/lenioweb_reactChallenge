import { css } from 'styled-components';

const styles = {
  CardContainer: css`
    align-items: flex-end;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    padding: 10px;
    width: 200px;

    ${(props) => css`
      background-image: url(${props.url});
      background-position: ${props.imgNotFound ? 'bottom left' : 'center'};
    `};

    @media (min-width: 500px) {
      ${(props) => css`
        width: ${props.isBanner ? '420px' : '200px'};
      `};
    }

    @media (min-width: 768px) {
      ${(props) => css`
        width: ${props.isBanner ? '640px' : '200px'};
      `};
    }

    @media (min-width: 960px) {
      ${(props) => css`
        width: ${props.isBanner ? '860px' : '200px'};
      `};
    }
  `,
  Title: css`
    color: ${(props) => props.theme.colorFont};
    margin: 0;
    text-shadow: ${(props) => props.theme.shadowText};
    width: 100%;
  `,
  StarContainer: css`
    height: 20px;
    width: 20px;
  `
};

export default styles;

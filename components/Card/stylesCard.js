import { css } from 'styled-components';

const styles = {
  CardContainer: css`
    align-items: flex-end;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    padding: 10px;

    ${(props) => css`
      background-image: url(${props.url});
      background-position: ${props.imgNotFound ? 'bottom left' : 'center'};
      width: ${props.isBanner ? 'initial' : '200px'};
    `};
  `,
  Title: css`
    color: white;
    margin: 0;
    text-shadow: 0px 0px 4px black;
    width: 100%;
  `,
  StarContainer: css`
    height: 20px;
    width: 20px;
  `
};

export default styles;

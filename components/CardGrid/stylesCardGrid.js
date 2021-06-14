import { css } from 'styled-components';

const styles = {
  CardGridContainer: css`
    display: grid;
    grid-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    list-style: none;
    margin: 0;
    max-width: 860px;
    min-width: 200px;
    padding: 0;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 960px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `,
  CardGridItem: css`
    max-width: 200px;

    ${(props) => css`
      grid-column: ${props.isBanner ? '1 / 2' : 'auto'};
      grid-row: ${props.isBanner ? '1' : 'auto'};
    `};

    @media (min-width: 500px) {
      max-width: 420px;
      ${(props) => css`
        grid-column: ${props.isBanner ? '1 / 3' : 'auto'};
      `}
    }

    @media (min-width: 768px) {
      max-width: 640px;
      ${(props) => css`
        grid-column: ${props.isBanner ? '1 / 4' : 'auto'};
      `}
    }

    @media (min-width: 960px) {
      max-width: 860px;
      ${(props) => css`
        grid-column: ${props.isBanner ? '1 / 5' : 'auto'};
      `}
    }
  `
};

export default styles;

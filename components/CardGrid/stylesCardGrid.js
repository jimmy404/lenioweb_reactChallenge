import { css } from 'styled-components';

const styles = {
  CardGridContainer: css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
    grid-gap: 20px;
    max-width: 860px;

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
      max-width: initial;
      ${(props) => css`
        grid-column: ${props.isBanner ? '1 / 3' : 'auto'};
      `}
    }

    @media (min-width: 768px) {
      ${(props) => css`
        grid-column: ${props.isBanner ? '1 / 4' : 'auto'};
      `}
    }

    @media (min-width: 960px) {
      ${(props) => css`
        grid-column: ${props.isBanner ? '1 / 5' : 'auto'};
      `}
    }
  `
};

export default styles;

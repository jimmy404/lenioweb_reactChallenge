import { css } from 'styled-components';

const styles = {
  StarContainer: css`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: crosshair;
    display: inline-block;
    height: ${(props) => props.theme.heightStar};
    min-width: ${(props) => props.theme.minWidthStar};
    width: ${(props) => props.theme.widthStar};

    ${(props) => css`
      background-image: url(${props.selected
        ? './yellowStar.svg'
        : './whiteStar.svg'});
    `}
  `
};

export default styles;

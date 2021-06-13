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
        ? 'https://image.flaticon.com/icons/png/512/1828/1828614.png'
        : 'https://image.flaticon.com/icons/png/512/1828/1828970.png'});
    `}
  `
};

export default styles;

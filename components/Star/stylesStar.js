import { css } from 'styled-components';

const styles = {
  StarContainer: css`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 100%;
    min-width: 30px;
    width: 100%;

    ${(props) => css`
      background-image: url(${props.selected
        ? 'https://image.flaticon.com/icons/png/512/1828/1828614.png'
        : 'https://image.flaticon.com/icons/png/512/1828/1828970.png'});
    `}
  `
};

export default styles;

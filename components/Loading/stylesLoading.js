import { css } from 'styled-components';

const styles = {
  LoadingContainer: css`
    align-items: center;
    color: ${(props) => props.theme.colorFontLoading};
    display: flex;
    font-size: ${(props) => props.theme.fontSizeMessage};
    font-weight: ${(props) => props.theme.fontWeightMessage};
    height: 100%;
    justify-content: center;
    width: 100%;
  `
};

export default styles;

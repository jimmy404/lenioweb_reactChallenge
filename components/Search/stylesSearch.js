import { css } from 'styled-components';

const styles = {
  NavBar: css`
    align-items: center;
    background: ${(props) => props.theme.backgroundNavBar};
    box-shadow: ${(props) => props.theme.boxShadowNavBar};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: ${(props) => props.theme.maxHeightNavBar};
    min-height: ${(props) => props.theme.minHeightNavBar};
    padding: ${(props) => props.theme.paddingNavBar};
    position: fixed;
    top: 0;
    width: 100%;
  `,
  StarContainer: css`
    height: ${(props) => props.theme.heightStarContainerNavBar};
    width: ${(props) => props.theme.widthStarContainerNavBar};
  `,
  ThemeButton: css`
    background-color: ${(props) => props.theme.themeBackgroundColor};
    border-radius: 4px;
    color: ${(props) => props.theme.themeButtonColor};
    margin: 10px;
    padding: 5px;
  `
};

export default styles;

import { css } from 'styled-components';

const styles = {
  DataMissingFeedbackContainer: css`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  `,
  DataMissingFeedbackContent: css`
    background-color: ${(props) => props.theme.BackgroundColorMessage};
    border-radius: ${(props) => props.theme.borderRadiusMessage};
    color: ${(props) => props.theme.colorFontMessage};
    display: flex;
    flex-direction: column;
    font-size: ${(props) => props.theme.fontSizeMessage};
    font-weight: ${(props) => props.theme.fontWeightMessage};
    height: 100%;
    justify-content: center;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
  `
};

export default styles;

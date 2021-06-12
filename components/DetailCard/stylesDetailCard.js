import { css } from 'styled-components';

const styles = {
  DetailCardContainer: css`
    display: flex;
    margin-bottom: 10px;

    ${(props) =>
      props.isPreview &&
      css`
        align-items: center;
        flex-direction: column;
        justify-content: center;
        @media (min-width: 600px) {
          flex-direction: row;
          align-items: flex-start;
        }
      `};
  `,
  ComicImage: css`
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 4px;
    display: flex;

    ${(props) => css`
      background-image: url(${props.url});
      background-size: ${props.isPreview ? 'contain' : 'cover'};
      height: ${props.isPreview ? '450px' : '100px'};
      margin-right: ${props.isPreview ? '10px' : 'initial'};
      width: ${props.isPreview ? '300px' : '100px'};
    `};
  `,
  MainContainer: css`
    display: flex;
    flex-direction: row;
    margin: 0;
  `,
  RigthPanel: css`
    display: flex;
    flex-direction: column;
    padding: 8px;

    ${(props) =>
      props.isPreview
        ? css`
            @media (min-width: 600px) {
              max-width: calc(100% - ${props.isPreview ? '300' : '100'}px);
            }
          `
        : css`
            max-width: calc(100% - ${props.isPreview ? '300' : '100'}px);
          `};
  `,
  StarContainer: css`
    height: 20px;
    margin-left: 10px;
    width: 20px;
  `,
  DataContainer: css`
    margin: 20px 0;
    padding: 0;
  `,
  Data: css`
    font-weight: bold;
  `,
  DescriptionContainer: css`
    margin: 0;
  `,
  TitleContainer: css`
    margin-bottom: 10px;
    margin: 0;

    ${(props) => css`
      font-size: ${props.isPreview ? '24px' : '15px'};
    `};
  `
};

export default styles;

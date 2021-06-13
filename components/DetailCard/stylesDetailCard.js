import { css } from 'styled-components';

const styles = {
  DetailCardContainer: css`
    display: flex;
    margin-bottom: ${(props) => props.theme.marginBottomContainer};

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
    border-radius: ${(props) => props.theme.borderRadiusComicImage};
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
    padding: ${(props) => props.theme.paddingRightPanel};
    color: ${(props) => props.theme.colorTextRightPanel};

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
    height: ${(props) => props.theme.heightStarContainer};
    margin-left: ${(props) => props.theme.marginLeftStarContainer};
    width: ${(props) => props.theme.widthStarContainer};
  `,
  DataContainer: css`
    margin: ${(props) => props.theme.marginDataContainer};
    padding: 0;
  `,
  Data: css`
    font-weight: ${(props) => props.theme.fontWeightMessage};
  `,
  DescriptionContainer: css`
    margin: 0;
  `,
  TitleContainer: css`
    margin-bottom: ${(props) => props.theme.marginBottomContainer};
    margin: 0;

    ${(props) => css`
      font-size: ${props.isPreview ? '24px' : '15px'};
    `};
  `
};

export default styles;

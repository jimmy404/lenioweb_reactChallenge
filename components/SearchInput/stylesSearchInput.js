import { css } from 'styled-components';

const styles = {
  SearchInputContainer: css`
    align-items: center;
    display: flex;
    justify-content: center;
    max-width: ${(props) => props.theme.maxWidthSearchInputContainer};
    width: ${(props) => props.theme.widthSearchInputContainer};

    @media (min-width: 500px) {
      max-width: 80%;
    }
  `,
  InputContainer: css`
    width: ${(props) => props.theme.widthInputContainer};
  `,
  Form: css`
    width: ${(props) => props.theme.widthForm};
  `,
  Input: css`
    border: none;
    outline: none;
    width: ${(props) => props.theme.widthInput};
  `,
  SearchIcon: css`
    background-image: url('https://image.flaticon.com/icons/png/512/622/622669.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: ${(props) => props.theme.heightSearchIcon};
    margin-right: ${(props) => props.theme.marginRightSearchIcon};
    width: ${(props) => props.theme.widthSearchIcon};
  `
};

export default styles;

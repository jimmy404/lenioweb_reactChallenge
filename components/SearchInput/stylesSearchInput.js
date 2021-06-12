import { css } from 'styled-components';

const styles = {
  SearchInputContainer: css`
    align-items: center;
    display: flex;
    justify-content: center;
    max-width: 50%;
    width: 100%;

    @media (min-width: 500px) {
      max-width: 80%;
    }
  `,
  InputContainer: css`
    width: 80%;
  `,
  Form: css`
    width: 100%;
  `,
  Input: css`
    border: none;
    outline: none;
    width: 100%;
  `,
  SearchIcon: css`
    background-image: url('https://image.flaticon.com/icons/png/512/622/622669.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 15px;
    margin-right: 15px;
    width: 15px;
  `
};

export default styles;

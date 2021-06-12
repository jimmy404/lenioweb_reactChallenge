import { css } from 'styled-components';

const styles = {
  NavBar: css`
    align-items: center;
    background: #fff;
    box-shadow: rgb(0 0 0) 0px 3px 15px -8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: 80px;
    min-height: 80px;
    padding: 20px;
    position: fixed;
    top: 0;
    width: 100%;
  `,
  StarContainer: css`
    height: 30px;
    width: 30px;
  `
};

export default styles;

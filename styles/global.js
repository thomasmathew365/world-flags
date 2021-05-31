import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primaryText};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
  }`;

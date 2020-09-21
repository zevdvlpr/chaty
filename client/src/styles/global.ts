import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  }
  
  *, button, input {
    border: 0;
    outline: 0;
    background: none;
    
    color: ${({ theme }) => theme.white};
    
    font-family: 'Roboto', sans-serif;  
  }
  
  a {
    text-decoration: none;
  }
  
  html {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    background-color: ${({ theme }) => theme.background};
  }
  
  ul {
    list-style: none;    
  }
`;

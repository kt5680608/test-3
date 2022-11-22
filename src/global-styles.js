import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
    :root {
        --g-color-primary: #27397d;
        --g-color-grey: rgba(39,57,125,0.5);
    }
    html{
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
    body{
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      width: 100vw;
      height: 100vh;
    }
    h1{
        font-family: Pretendard-Regular,sans-serif;
        margin: 0;
        padding: 0;   
    }
    h2{
      font-family: Pretendard-Regular,sans-serif;
      margin: 0;
      padding: 0;
    }
    h3{
        font-family: Pretendard-Regular,sans-serif;
        margin: 0;
        padding: 0;
    }
    h4{
        font-family: Pretendard-Regular,sans-serif;
        margin: 0;
        padding: 0;
    }
    p{
        margin: 0;
        padding: 0;
        }
    hr{
        margin: 6px 0;
        width: 100%;
        border: 1px solid var(--g-color-background)
    }
    ul{
      display: flex;
      align-items: space-evenly;
      grid-gap: 12px;
      width: 100%;
      height: 100%
    }
    
    p{
        font-family: Pretendard-Regular, sans-serif;
        margin: 0;
        padding: 0;
    }
    pre{
        font-family: Pretendard-Regular, sans-serif;
        margin: 0;
        padding: 0;
    }
    li{
        list-style: none;
        height: min-content;
    }
    ul{
        list-style  : none;
        margin: 0;
        padding: 0;
        width: min-content;
    }
    input:focus{
        outline: none;
    }
    
`;

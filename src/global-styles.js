import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Aharoni"; src: url("//db.onlinewebfonts.com/t/3c1a440c0da3e6484b92282953ca3555.eot");
    src: url("//db.onlinewebfonts.com/t/3c1a440c0da3e6484b92282953ca3555.eot?#iefix") format("embedded-opentype"),
        url("//db.onlinewebfonts.com/t/3c1a440c0da3e6484b92282953ca3555.woff2") format("woff2"),
        url("//db.onlinewebfonts.com/t/3c1a440c0da3e6484b92282953ca3555.woff") format("woff"),
        url("//db.onlinewebfonts.com/t/3c1a440c0da3e6484b92282953ca3555.ttf") format("truetype"),
        url("//db.onlinewebfonts.com/t/3c1a440c0da3e6484b92282953ca3555.svg#Aharoni") format("svg");
            }
@font-face {
    font-family: "Roboto-Mono";
    src: url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400&display=swap');
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
        font-family: 'Aharoni', sans-serif;
        margin: 0;
        padding: 0;   
        color: var(--g-color-primary);
    }
    h2{
      font-family: 'Aharoni', sans-serif;
      margin: 0;
      padding: 0;
      color: var(--g-color-primary);
    }
    h3{
        font-family: 'Aharoni', sans-serif;
        margin: 0;
        padding: 0;
        color: var(--g-color-primary);
    }
    h4{
        font-family: 'Aharoni', sans-serif;
        margin: 0;
        padding: 0;
        color: var(--g-color-primary);
    }
    p{
        font-family: 'Aharoni', sans-serif;
        margin: 0;
        padding: 0;
        color: var(--g-color-primary);
        }
    hr{
        margin: 6px 0;
        width: 100%;
        border: 1px solid black;
    }
    a{
        text-decoration: none;
    }
    pre{
        font-family: 'Aharoni', sans-serif;
        margin: 0;
        padding: 0;
    }
    li{
        list-style: none;
        height: min-content;
        color: var(--g-color-primary);
        font-family: 'Aharoni', sans-serif;

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

import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        background: #ddd;
        -webkit-font-smoothing: antialised;
        font-size: 14px;
        color: #333;
    }

`
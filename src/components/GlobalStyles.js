import { createGlobalStyle } from "styled-components";

let h1 = `5rem`;
let h2 = `3.5rem`;
let h3 = `3rem`;
let p = `2.5rem`;

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
}

html {
    font-size: 62.5%;
}

h1 {
    font-size: ${h1};
}
h2 {
    font-size: ${h2};
}
h3 {
    font-size: ${h3};
}
p, li {
    font-size: ${p};
}


body {
    font-family: 'Montserrat', sans-serif;
    /* background: #dedede; */
    background: #ffffff;
}

`;

export default GlobalStyles;

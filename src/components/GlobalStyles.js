import { createGlobalStyle } from "styled-components";

let h1 = `calc(4rem + 1vw)`;
let h2 = `calc(3rem + 1vw)`;
let h3 = `calc(2.5rem + 1vw)`;
let p = `calc(1rem + 1vw)`;

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

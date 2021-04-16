import { createGlobalStyle } from "styled-components";

let h1 = `calc(3.5rem + .5vw)`;
let h2 = `calc(2rem + .5vw)`;
let h3 = `calc(2rem + .5vw)`;
let p = `calc(1.8rem + .5vw)`;

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
    background: #ffffff;
}

`;

export default GlobalStyles;

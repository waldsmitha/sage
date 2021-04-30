import { createGlobalStyle } from "styled-components";

let h1 = `calc(3rem + .5vw)`;
let h2 = `calc(2rem + .5vw)`;
let h3 = `calc(2rem + .5vw)`;
let p = `calc(1.8rem + .5vw)`;
let li = `calc(1.3rem + .5vw)`;

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
p {
    font-size: ${p};
}

li {
    font-size: ${li}
}

button {
    font-size: ${h2};
}


body {
    font-family: 'Montserrat', sans-serif;
    background: rgb(2,0,36);
background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(222,234,222,1) 100%, rgba(187,212,187,0.47773105824360995) 100%);
    color: #575757;
}

`;

export default GlobalStyles;

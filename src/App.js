import React from "react";

import Home from "./pages/Home";

//styling
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

//Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Route exact path={"/"}>
        <StyledApp>
          <Home />
        </StyledApp>
      </Route>
    </div>
  );
}

const StyledApp = styled.div`
  overflow-x: hidden;
  /* position: relative; */
`;

export default App;

import React from "react";

import Home from "./pages/Home";
import Lyme from "./pages/Lyme";
import Modalities from "./pages/Modalities";
import Pans from "./pages/Pans";
import Services from "./pages/ServicesPage";

//styling
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

//Router
import { Route, Switch, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path={"/"}>
            <StyledApp>
              <Home />
            </StyledApp>
          </Route>
          <Route path="/Lyme">
            <Lyme />
          </Route>
          <Route path="/Modalities">
            <Modalities />
          </Route>
          <Route path="/pans">
            <Pans />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

const StyledApp = styled.div`
  overflow: hidden;
`;

export default App;

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
  max-width: 1800px;
  margin: 0 auto;
  overflow-x: hidden;
`;

export default App;

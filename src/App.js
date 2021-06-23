import Navbar from "./componentes/01-Navbar/Navbar.jsx";
import Main from "./componentes/main.js";
import PageDesing from "./componentes/desing.js";
import PageProgramming from "./componentes/programming";
import PageInscriptionDesing from "./componentes/inscriptionDesign.js";
import PageInscriptionProgra from "./componentes/inscriptionProgra.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/design/inscription">
          <PageInscriptionDesing/>
        </Route>
        <Route exact path="/programming/inscription">
          <PageInscriptionProgra/>
        </Route>
        <Route exact path="/design">
          <PageDesing/>
        </Route>
        <Route exact path="/programming">
          <PageProgramming/>
        </Route>
        <Route exact path="/">
          <Main/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;

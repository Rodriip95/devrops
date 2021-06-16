import Navbar from "./componentes/01-Navbar/Navbar.jsx";
import Main from "./componentes/main.js";
import PageDesing from "./componentes/desing.js";
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
        <Route exact path="/curso/design">
          <PageDesing/>
        </Route>
        <Route exact path="/curso/programming">
          <Main/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;

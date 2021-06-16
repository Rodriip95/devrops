import Navbar from "./componentes/01-Navbar/Navbar.jsx";
import Main from "./componentes/main.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;

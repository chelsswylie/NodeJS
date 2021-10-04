import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Administration from "./components/Administration";

function App() {
  return (
    <Router>
      <Navbar>NAVBAR</Navbar>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Registration">
        <Registration />
      </Route>
      <Route path="/Administration">
        <Administration />
      </Route>
    </Router>
  );
}

export default App;

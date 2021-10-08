import "./App.css";
import React, { Component } from "react";
import logo from "./logo.svg";

// import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Registration from "./components/Registration";
// import Administration from "./components/Administration";

// function App() {
//   return (
//     <Router>
//       <Navbar>NAVBAR</Navbar>
//       <Route path="/" exact>
//         <Home />
//       </Route>
//       <Route path="/Registration">
//         <Registration />
//       </Route>
//       {/* <Route path="/Administration">
//         <Administration />
//       </Route> */}
//     </Router>
//   );
// }

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/Registrants");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;

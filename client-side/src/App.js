import "./App.css";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Administration from "./components/Administration";

function App() {
  const [data, setData] = React.useState(null);

  const callBackendAPI = async () => {
    const response = await fetch("/Registrants");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  useEffect(() => {
    callBackendAPI()
      .then((res) => setData(res.express))
      .then(console.log({ data }))
      .catch((err) => console.log(err));
  }, []);

  async function getData(data = null) {
    setData(data);
  }

  async function postData(data = null) {
    setData(data);
  }

  return (
    <Router>
      <Navbar>NAVBAR</Navbar>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route
        path="/Registration"
        render={(props) => <Registration {...props} data={data} />}
      ></Route>
      <button>{data}</button>
      <Route
        path="/Administration"
        render={(props) => <Administration {...props} data={data} />}
      ></Route>
    </Router>
  );
}

export default App;

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
    const response = await fetch("/Administration");

    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  useEffect(() => {
    callBackendAPI()
      // how we are getting the express response
      .then((res) => setData(res.express))
      // .then(console.log("we're getting this from the backend", { data }))
      .catch((err) => console.log(err));
  }, []);

  async function getData(data) {
    setData(data);
    console.log(data);
  }

  async function postData(data) {
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
        render={(props) => (
          <Registration {...props} data={data} postData={postData} />
        )}
      ></Route>
      <Route
        path="/Administration"
        render={(props) => (
          <Administration {...props} data={data} getData={getData} />
        )}
      ></Route>
    </Router>
  );
}

export default App;

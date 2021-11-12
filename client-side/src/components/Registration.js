import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import registrantService from "../services/registrantService";
import axios from "axios";
// import axios from "axios";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      addressOne: "",
      addressTwo: "",
      City: "",
      State: "",
      ZIP: "",
      Country: "",
    };

    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleSecondChange = this.handleSecondChange.bind(this);
    this.handleThirdChange = this.handleThirdChange.bind(this);
    this.handleFourthChange = this.handleFourthChange.bind(this);
    this.handleFifthChange = this.handleFifthChange.bind(this);
    this.handleSixthChange = this.handleSixthChange.bind(this);
    this.handleSeventhChange = this.handleSeventhChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstChange(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      firstname: value,
    });
  }

  handleSecondChange(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      lastname: value,
    });
  }

  handleThirdChange(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      addressOne: value,
    });
  }

  handleFourthChange(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      addressTwo: value,
    });
  }

  handleFifthChange(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      City: value,
    });
  }

  handleSixthChange(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      State: value,
    });
  }

  handleSeventhChange(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      ZIP: value,
    });
  }

  // this is going to send the data to the server
  handleSubmit(e) {
    e.preventDefault();
    const updatedFields = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      addressOne: this.state.addressOne,
      addressTwo: this.state.addressTwo,
      City: this.state.City,
      State: this.state.State,
      ZIP: this.state.ZIP,
    };

    axios({
      url: "/Administration",
      method: "POST",
      data: updatedFields,
    })
      .then(() => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal server error");
      });
    // registrantService.postData().then((response) => {
    //   console.log(e.response, "does this work?");
    // });
    // alert below only picks up one value at a time
    console.log(
      this.state.firstname,
      this.state.lastname,
      this.state.addressOne,
      this.state.addressTwo,
      this.state.City,
      this.state.State,
      this.state.ZIP
    );
    alert(this.state.lastname);
  }

  render() {
    console.log("State: ", this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            {/* First Name: */}
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.handleFirstChange}
              placeholder="First Name"
              name="firstname"
            />
          </label>
          <br />
          <label>
            {/* Last Name: */}
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handleSecondChange}
              placeholder="Last Name"
            />
          </label>
          <br />
          <label>
            {/* Address One: */}
            <input
              type="text"
              value={this.state.addressOne}
              onChange={this.handleThirdChange}
              placeholder="Address 1"
            />
          </label>
          <br />
          <label>
            {/* Address Two: */}
            <input
              type="text"
              value={this.state.addressTwo}
              onChange={this.handleFourthChange}
              placeholder="Address 2"
            />
          </label>
          <br />
          <label>
            {/* City: */}
            <input
              type="text"
              value={this.state.City}
              onChange={this.handleFifthChange}
              placeholder="City"
            />
          </label>
          <br />
          <label>
            {/* State: */}
            <input
              type="text"
              value={this.state.State}
              onChange={this.handleSixthChange}
              placeholder="State"
            />
          </label>
          <br />
          <label>
            {/* ZIP: */}
            <input
              type="text"
              value={this.state.ZIP}
              onChange={this.handleSeventhChange}
              placeholder="ZIP"
            />
          </label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<Registration />, document.getElementById("root"));

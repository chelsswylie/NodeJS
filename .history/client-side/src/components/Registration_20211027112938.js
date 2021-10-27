import React, { useState } from "react";
import registrantService from "../services/registrantService";
// import axios from "axios";

const Registration = (props) => {
  const initialState = {
    firstname: "",
    lastname: "",
    addressOne: "",
    addressTwo: "",
    City: "",
    State: "",
    ZIP: "",
    Country: "",
  };
  const [input, setInput] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleClick = (e) => {
    registrantService.postData().then((response) => {
      console.log(e.response, "does this work?");
    });

    e.preventDefault();
    alert(`${input.firstname} ${input.lastname}  Registered Successfully !!!!`);

    // setInput({
    //   firstname: input.firstname,
    //   lastname: input.lastname,
    //   addressOne: input.addressOne,
    //   addressTwo: input.addressTwo,
    //   City: input.City,
    //   State: input.State,
    //   ZIP: input.ZIP,
    //   Country: input.Country,
    // });
    console.log("Registered successfully!");
    console.log(initialState);
    console.log("The input", input);
  };

  return (
    <div className="container">
      <h1>Registration page</h1>
      <form>
        <div className="form-group">
          {/* <h1>{this.postData}</h1> */}
          <input
            value={input.firstname}
            onChange={handleChange}
            placeholder="First Name"
            // {console.log(input)}
            name="firstname"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            name="lastname"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.addressOne}
            onChange={handleChange}
            placeholder="Address 1"
            name="addressOne"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.addressTwo}
            onChange={handleChange}
            placeholder="Address 2"
            name="addressTwo"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.City}
            onChange={handleChange}
            placeholder="City"
            name="City"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.State}
            onChange={handleChange}
            placeholder="State"
            name="State"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.ZIP}
            onChange={handleChange}
            placeholder="ZIP"
            name="ZIP"
            className="form-group"
            maxLength="9"
            minLength="5"
          ></input>
        </div>
        <div className="form-group">
          <input
            value="US"
            readOnly
            placeholder="Country"
            name="Country"
            className="form-group"
            data-toggle="dropdown"
            aria-haspopup="true"
          ></input>
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default Registration;

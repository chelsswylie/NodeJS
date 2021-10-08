import React, { useState } from "react";
import axios from "axios";

const baseURL =
  "mongodb+srv://Sofie:P4ssw0rd@Registrants.gnzcn.mongodb.net/Registrants?retryWrites=true&w=majority";

function Registration() {
  // this.handleClick = this.handleClick.bind(this);
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    Address1: "",
    Address2: "",
    City: "",
    State: "",
    ZIP: "",
    Country: "",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZIP] = useState("");
  const [country, setCountry] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const handleClick = async (e) => {
    // e.preventdefault();
    const newRegistration = {
      firstname: firstName,
      lastname: lastName,
      Address1: addressOne,
      Address2: addressTwo,
      City: city,
      State: state,
      ZIP: zip,
      Country: country,
    };
    console.log(newRegistration);

    await axios.post(baseURL + "/Registrants", newRegistration).then((res) => {
      console.log(res.data);
      setFirstName({ firstName: e.target.value });
      setLastName({ lastName: e.target.value });
      setAddressOne({ addressOne: e.target.value });
      setAddressTwo({ addressTwo: e.target.value });
      setCity({ city: e.target.value });
      setState({ state: e.target.value });
      setZIP({ zip: e.target.value });
      // setCountry(country);
    });
  };

  // function handleClick(event) {
  //   // event.preventDefault();
  //   alert(`${input.firstname} ${input.lastname}  Registered Successfully !!!!`);
  //   console.log("Registered successfully!");
  //   const newRegistration = {
  //     firstname: input.firstname,
  //     lastname: input.lastname,
  //     Address1: input.Address1,
  //     Address2: input.Address2,
  //     City: input.City,
  //     State: input.State,
  //     ZIP: input.ZIP,
  //   };
  //   // axios.post(baseURL, newRegistration).then((response) => {
  //   //   setInput(response.newRegistration);
  //   // });
  // }
  return (
    <div className="container">
      <h1>Registration page</h1>
      <form>
        <div className="form-group">
          <input
            value={input.firstName}
            onChange={handleChange}
            placeholder="First Name"
            // {console.log(input)}
            name="firstname"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.lastName}
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
            name="Address1"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.addressTwo}
            onChange={handleChange}
            placeholder="Address 2"
            name="Address2"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.city}
            onChange={handleChange}
            placeholder="City"
            name="City"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.state}
            onChange={handleChange}
            placeholder="State"
            name="State"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.zip}
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
}

export default Registration;

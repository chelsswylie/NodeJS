import React, { useState, useEffect } from "react";
import registrantService from "../services/registrantService";
// import model from "../../../server-side/models/fetchmodels";
import { Link } from "react-router-dom";

const AdminPage = (props) => {
  const [registrants, setRegistrants] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    retrieveRegistrants();
  }, []);

  const retrieveRegistrants = () => {
    registrantService
      .getAll()
      .then((response) => {
        console.log(response.data, "This is coming from the admin page");
        // setRegistrants(response.data.registrants);
        const allData = [
          setFirstName(response.data.firstname),
          setLastName(response.data.lastname),
          setAddressOne(response.data.addressOne),
          setAddressTwo(response.data.addressTwo),
          setCity(response.data.City),
          setState(response.data.State),
          setZip(response.data.ZIP),
          // console.log({ registrants });
        ];
        console.log("allthedata", allData.firstname);
        // setRegistrants([allData]);
      })
      .catch((e) => {
        console.log(e);
      });
    // console.log({ registrants });
  };

  const refreshList = () => {
    retrieveRegistrants();
  };

  // const first_name = db.inventory.find( { first_name: "Patrick" } )
  return (
    // Can I make calls to db below?
    <div>
      <button onClick={refreshList}>Get Registrants</button>
      {/* <br></br>
      {registrants} */}
      {/* <br></br>
      db.Registrants.insertMany( [ */}
      <span>{firstname}</span>
      <br></br>
      <span>{lastname}</span>
      <br></br>
      <span>{addressOne}</span>
      <br></br>
      <span>{addressTwo}</span>
      <br></br>
      <span>{city}</span>
      <br></br>
      <span>{state}</span>
      <br></br>
      <span>{zip}</span>
      {/* ] */}
    </div>
  );
};

export default AdminPage;

// import React, { Component } from "react";
// import ReactDataSheet from "react-datasheet";
// // Be sure to include styles at some point, probably during your bootstrapping
// import "react-datasheet/lib/react-datasheet.css";
// import "./Administration.css";
// import Registration from "./Registration";

// // function Administration() {
// //   return (
// //     <div className="container">
// //       <h1>Administration page</h1>
// //     </div>
// //   );
// // }

// class Administration extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       grid: [
//         [
//           { value: "First Name" },
//           { value: "Last Name" },
//           { value: "Address 1" },
//           { value: "Address 2" },
//           { value: "City" },
//           { value: "State" },
//           { value: "ZIP" },
//           { value: "Country" },
//         ],
//         [
//           { value: this.firstname },
//           { value: this.lastname },
//           { value: this.Address1 },
//           { value: this.Address2 },
//           { value: this.City },
//           { value: this.State },
//           { value: this.ZIP },
//           { value: this.Country },
//           // need to loop through above to get continued results - MongoDB integration will help
//         ],
//       ],
//     };
//   }

//   render() {
//     return (
//       <ReactDataSheet
//         id="thegrid"
//         data={this.state.grid}
//         valueRenderer={(cell) => cell.value}
//         onCellsChanged={(changes) => {
//           const grid = this.state.grid.map((row) => [...row]);
//           changes.forEach(({ cell, row, col, value }) => {
//             grid[row][col] = { ...grid[row][col], value };
//           });
//           this.setState({ grid });
//         }}
//       />
//     );
//   }
// }

// export default Administration;

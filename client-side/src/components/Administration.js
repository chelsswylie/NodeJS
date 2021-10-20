import React, { useState, useEffect } from "react";
import registrantService from "../services/registrantService";
import { Link } from "react-router-dom";

const AdminPage = (props) => {
  const [registrants, setRegistrants] = useState([]);

  useEffect(() => {
    retrieveRegistrants();
  }, []);

  const retrieveRegistrants = () => {
    registrantService
      .getAll()
      .then((response) => {
        console.log("This is coming from the admin page", response.data);
        setRegistrants(response.data.registrants);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveRegistrants();
  };
  return <button onClick={refreshList}>Get Registrants</button>;
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

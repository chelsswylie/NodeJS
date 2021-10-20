import axios from "axios";

export default axios.create({
  baseURL: "/Registrants",
  headers: {
    "Content-type": "application/json",
  },
});

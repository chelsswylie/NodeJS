import axios from "axios";

// might not be passing enough info into http-common here
export default axios.create({
  baseURL: "/",
  headers: {
    "Content-type": "application/json",
  },
});

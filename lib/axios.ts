import axios from "axios";
//This allows me to set the base URL for the entire application
//Import axios FROM THIS FILE everywhere else I need to use it to use this baseURL
export default axios.create({
  baseURL: "http://localhost:3000/api",
});

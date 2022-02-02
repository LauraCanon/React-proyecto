import axios from "axios";
import { collabRegister } from "../../store/userSlicer/userSlice";

// const token = localStorage.getItem("token") || null;

export const fixHogarApi = {
  async loginUser(user) {
    const config = { header: { "Content-type": "application/json" } };
    const response = await axios.post("/sessionlogin", user, config);
    // console.log(response);
    // token = response.data.token;
    return response.data;
  },
  async collabRegister(collabs) {
    const config = { header: { "Content-type": "application/json" } };
    const response = await axios.post("/collabregister", collabs, config);
    console.log(response);
    return response.data;
  },
  async userRegister(users) {
    const config = { header: { "Content-type": "application/json" } };
    const response = await axios.post("/useregister", users, config);
    console.log(response);
    return response.data;
  },
};

import axios from "axios";
import { collabRegister } from "../../store/userSlicer/userSlice";
import { verifiedEmail } from "../../store/userSlicer/verfyEmail";
axios.defaults.baseURL = "http://localhost:3000";
// const token = localStorage.getItem("token") || null;

export const fixHogarApi = {
  async loginUser(user) {
    try {
      const config = { header: { "Content-type": "application/json" } };
      const response = await axios.post("/sessionlogin", user, config);
      console.log(response);
      // token = response.data.token;
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async collabRegister(collabs) {
    const config = { header: { "Content-type": "application/json" } };
    const response = await axios.post("/collabregister", collabs, config);
    console.log(response);
    return response.data;
  },
  async userRegister(users) {
    try {
      const config = { header: { "Content-type": "application/json" } };
      const response = await axios.post("/useregister", users, config);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async verifiedEmail(id, hash) {
    console.log(hash);
    try {
      const config = { header: { "Content-type": "application/json" } };
      const response = await axios.post(`/activate/${hash}/${id}`, config);
      console.log(response);
      // return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
};

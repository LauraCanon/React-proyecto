import axios from "axios";
import { collabRegister } from "../../store/userSlicer/userSlice";
import { verifiedEmail } from "../../store/userSlicer/verfyEmail";
axios.defaults.baseURL = "http://localhost:3000";

// const token = localStorage.getItem("token") || null;

export const fixHogarApi = {
  async loginUser(user) {
    const config = { header: { "Content-type": "application/json" } };
    const response = await axios.post("/sessionlogin", user, config);
    console.log("llego aqui", response);
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
    try {
      const config = { header: { "Content-type": "application/json" } };
      const response = await axios.post("/useregister", users, config);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.request);
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
  async servicesCollabs() {
    try {
      const response = await axios.get("/services");
      // console.log(response)
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async citysCollabs(service) {
    try {
      const response = await axios.get("/city", { params: { service } });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async serviceCollabList(search) {
    const { service, city } = search;
    try {
      const response = await axios.get("/search/services", {
        params: { service, city },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async fileUser(file) {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post("/file/user", file, config);
      console.log(response);
      return response.data.result;
    } catch (error) {
      console.log(error.response);
    }
  },
  async requestService(id) {
    const config = { header: { "Content-type": "application/json" } };
    const response = await axios.post("/request/service", id, config);
    console.log(response.data);
    return response.data;
  },
};

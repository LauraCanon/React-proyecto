import axios from "axios";

// const token = localStorage.getItem("token") || null;

export const fixHogarApi = {
  async loginUser(user) {
    const config = { header: { "Content-type": "application/json" } };
    const response = await axios.post("/sessionlogin", user, config);
    console.log(response);
    // token = response.data.token;
    return response.data;
  },
};

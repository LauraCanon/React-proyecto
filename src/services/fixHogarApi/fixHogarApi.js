import axios from 'axios';

// const token = localStorage.getItem("token") || null;

export const fixHogarApi = {
  async loginUser(user) {
    const config = { header: { 'Content-type': 'application/json' } };
    const response = await axios.post('/sessionlogin', user, config);
    console.log(response);
    // token = response.data.token;
    return response.data;
  },
  async collabRegister(collabs) {
    const config = { header: { 'Content-type': 'application/json' } };
    const response = await axios.post('/collabregister', collabs, config);
    console.log(response);
    return response.data;
  },
  async userRegister(users) {
    try {
      const config = { header: { 'Content-type': 'application/json' } };
      const response = await axios.post('/useregister', users, config);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.request);
    }
  },
  async servicesCollabs() {
    try {
      const response = await axios.get('/services');
      // console.log(response)
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async citysCollabs(service) {
    try {
      const response = await axios.get('/city', { params: { service } });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async serviceCollabList(search) {
    const { service, city } = search;
    try {
      const response = await axios.get('/search/services', {
        params: { service, city },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
};

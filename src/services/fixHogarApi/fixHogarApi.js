import axios from 'axios';
axios.defaults.baseURL = 'https://fixhogar.herokuapp.com';

export const fixHogarApi = {
  async loginUser(user) {
    try {
      const config = { header: { 'Content-type': 'application/json' } };
      const response = await axios.post('/sessionlogin', user, config);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
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
      console.log(error.response);
    }
  },
  async verifiedEmail(id, hash) {
    console.log(hash);
    try {
      const config = { header: { 'Content-type': 'application/json' } };
      const response = await axios.post(`/activate/${hash}/${id}`, config);
      console.log(response);
      // return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async servicesCollabs() {
    try {
      const response = await axios.get('/services');
      // console.log(response);
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
  async fileUser(file) {
    const token = JSON.parse(window.localStorage.getItem('token'));
    try {
      const response = await axios.post('/file/user', file, {
        headers: {
          'Content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      return response.data.result;
    } catch (error) {
      console.log(error.response);
    }
  },
  async createService(infoService) {
    const { description, price, services } = infoService;
    const token = JSON.parse(window.localStorage.getItem('token'));
    try {
      const response = await axios.post(
        '/services',
        {
          description,
          price,
          services,
        },
        {
          headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async deleteService(id) {
    const token = JSON.parse(window.localStorage.getItem('token'));

    console.log(id);
    try {
      const response = await axios.delete(`/services`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        data: {
          id: id,
        },
      });
      return response.data;
    } catch (error) {
      return error.response;
    }
  },
  async listOfCity() {
    try {
      const response = await axios.get(
        'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json'
      );
      const cityOfColombia = response.data;
      const ciudades = [];
      cityOfColombia.map((citys) => {
        citys.ciudades.map((city) => {
          ciudades.push(city);
        });
      });
      return ciudades;
    } catch (error) {
      console.log(error);
    }
  },
  async listServiceCollab() {
    const token = JSON.parse(window.localStorage.getItem('token'));
    try {
      const response = await axios.get('/collaborator/service', {
        headers: {
          'Content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async scheduleService(schedule) {
    const token = JSON.parse(window.localStorage.getItem('token'));
    try {
      const response = await axios.post(
        '/schedule/service',
        { schedule },
        {
          headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async getServiceRequests() {
    const token = JSON.parse(window.localStorage.getItem('token'));

    try {
      const response = await axios.get('/requests/service', {
        headers: {
          'Content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async getCreditCards() {
    const token = JSON.parse(window.localStorage.getItem('token'));
    try {
      const response = await axios.get('/cards-customer', {
        headers: {
          'Content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async createTokenCreditCard(ccInfo) {
    const { holder, numberCard, expMonth, expYear, cvc } = ccInfo;
    const token = JSON.parse(window.localStorage.getItem('token'));
    try {
      const response = await axios.post(
        '/card-token',
        {
          holder,
          numberCard,
          expMonth,
          expYear,
          cvc,
        },
        {
          headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(
        `🤖 ~ file: fixHogarApi.js ~ line 217 ~ createTokenCreditCard ~ response`,
        response
      );

      return { status: 'ok' };
    } catch (error) {
      console.log(error.response);
    }
  },
  async customerPayment() {
    const token = JSON.parse(window.localStorage.getItem('token'));
    try {
      const response = await axios.post(
        '/create-customer',
        {},
        {
          headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response.data;
    }
  },
  async makePayment(payment) {
    console.log(
      `🤖 ~ file: fixHogarApi.js ~ line 263 ~ makePayment ~ payment`,
      payment
    );
    const token = JSON.parse(window.localStorage.getItem('token'));

    try {
      const response = await axios.post(
        '/make-payment',
        { payment },
        {
          headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  },
};

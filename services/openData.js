const axios = require('axios');
const openData = axios.create({ baseURL: 'https://data.cityofnewyork.us' });

openData.defaults.headers['Content-Type'] = 'application/json';

const useOpenData = async ({ path = '/', headers = {}, params = {}, method = 'GET', data = {} }) => {
  try {
    const response = await openData({
      url: path,
      headers,
      params,
      method,
      data,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

module.exports = useOpenData;

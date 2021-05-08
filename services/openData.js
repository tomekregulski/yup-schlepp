const axios = require('axios');
const openData = axios.create({ baseUrl: 'https://data.cityofnewyork.us' });

// openData.defaults.params.key = process.env.GKEY;
openData.defaults.headers['Content-Type'] = 'application/json';

const useOpenData = async ({ path = '/', headers = {}, params = {}, method = 'GET', data = {} }) => {
  const response = await openData({
    url: path,
    headers,
    params,
    method,
    data,
  });

  return response;
};

module.exports = useOpenData;

// const trains = await fetch(`https://data.cityofnewyork.us/resource/kk4q-3rt2.json`);

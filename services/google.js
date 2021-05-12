const axios = require('axios');
const googleApi = axios.create({ baseURL: 'https://maps.googleapis.com/maps/api/geocode/json' });

googleApi.defaults.params = { key: process.env.GKEY };
googleApi.defaults.headers['Content-Type'] = 'application/json';

const useGoogleApi = async ({ path = '/', headers = {}, params = {}, method = 'GET', data = {} }) => {
  const response = await googleApi({
    url: path,
    headers,
    params,
    method,
    data,
  });

  return response.data;
};

module.exports = useGoogleApi;

// https://maps.googleapis.com/maps/api/geocode/json?address=${buildingVal}&key=${gKey}

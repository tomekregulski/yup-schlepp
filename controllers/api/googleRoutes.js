const router = require('express').Router();
const useGoogleApi = require('../../services/google');

router.all('*', async (req, res) => {
  const { body: data, method, path, query: params } = req;

  try {
    const response = await useGoogleApi({
      data,
      method,
      path,
      params,
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require('express').Router();
const useOpenData = require('../../services/openData');

router.all('*', async (req, res) => {
  const { body: data, method, path, query: params } = req;

  try {
    const response = await useOpenData({
      data,
      method,
      path,
      params,
    });

    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

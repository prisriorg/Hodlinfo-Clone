const express = require('express');
const axios = require('axios');
// const { Ticker } = require('../models');
const router = express.Router();

router.get('/tickers', async (req, res) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickerss = Object.values(response.data).slice(0, 10);
    // await Ticker.destroy({ where: {}, truncate: true });
    // await Ticker.bulkCreate(tickerss.map(ticker => ({
    //   name: ticker.name,
    //   last: ticker.last,
    //   buy: ticker.buy,
    //   sell: ticker.sell,
    //   volume: ticker.volume,
    //   base_unit: ticker.base_unit,
    // })));
    // const tickers = await Ticker.findAll();
    res.json(tickerss);
  } catch (error) {
    res.status(500).send('Error fetching data from database');
  }
});

module.exports = router;

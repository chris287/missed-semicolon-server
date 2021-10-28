var express = require('express');
require('dotenv').config();
var router = express.Router();
const axios = require('axios');

/* Get News Object */
router.get('/', function(req, res, next) {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const newsResponse = axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+API_KEY)
  .then(response => res.json(response.data))
  .catch(error => res.json(error))
  // res.send(newsResponse);
});

module.exports = router;

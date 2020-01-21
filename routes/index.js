var express = require('express');
var router = express.Router();
const getArticles = require("../scraper");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await getArticles();
  res.render('index', result);
});

module.exports = router;

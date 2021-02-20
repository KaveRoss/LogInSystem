var axios = require('axios');
var express = require('express');
var router = express.Router();
var res;

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('localhost:1337/users')
  .then(function (response) {
    res = response.data;
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  })
  res.render('index', { title: 'Express', _ar: res});
});

module.exports = router;

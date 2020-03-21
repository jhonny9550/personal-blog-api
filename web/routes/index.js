'use strict';

const express = require('express');
const router = express.Router();

/* Avoiding favicon.ico request */
router.get('/favicon.ico', (req, res) => res.status(204));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).end('Express working!');
});

module.exports = router;

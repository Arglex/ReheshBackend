const { Router } = require('express');
var express = require('express');
const { Module } = require('module');
const { MainOrder_get } = require('../controllers/MainOrderController');
var router = express.Router();

// Home page route.
router.get('/:MainOrderId', function (req, res) {
  res.send('MainOrder');
})

exports = router;
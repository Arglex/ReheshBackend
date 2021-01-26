var express = require('express');
var router = express.Router();

var mainorder_controller = require('../controllers/MainOrderController');
var order_controller = require('../controllers/OrderController');
var user_controller = require('../controllers/UserController');
var sellitem_controller = require('../controllers/bookinstanceController');
var bid_controller = require('../controllers/BidController');
var biditem_controller = require('../controllers/BidItemController');
var MainOrder = require('../models/MainOrder');
var Order = require('../models/Order')
// Get the Main Order number
exports.MainOrder_get = function(req, res) {
    
    let MainOrderId = req.params.MainOrderId;

    let MainOrder = MainOrder.find({
        where: {
          order_id: MainOrderId
        }
      });
    
    let OrderIds = Order.findAll({
        where: {
            mn_order: MainOrderId
        }
      });
    
    let Creator = User.find({
        where: {
            id_num: MainOrder.customer_id
        }
      });

    let response = {
        MainOrderId,
        OrderIds,
        CustomerId: MainOrder.customer_id,
    };
    res.json(response);
};























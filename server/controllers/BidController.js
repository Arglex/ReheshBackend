var Bid = require('../models/Bid');
var Order = require('../models/Order')

exports.Bid_get = function(req, res) {
    
    let Bid_Id = req.params.Bid_Id;

    let Bid = Bid.find({
        where: {
          bid_id: Bid_Id
        }
      });
    
    let BidIds = Order.findAll({
        where: {
            bids: Bid_Id
        }
      });
    
    let OrderOfBid = Order.find({
        where: {
            id_order: Order.customer_id //?
        }
      });

    let response = {
        MainOrderId,
        OrderIds: BidIds,
        CustomerId: Bid.customer_id,
    };
    res.json(response);
};
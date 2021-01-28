var MainOrder = require("../models/MainOrder");
var Order = require("../models/Order");
// Get the Main Order number
exports.MainOrder_get = function (req, res) {
  let Order = Order.find({
    where: {
      mn_order: Order,
    },
  });

  let BimCommander = Order.findAll({
    where: {
      bim_commader: BimCommader,
    },
  });

  let ProAt1 = Order.find({
    where: {
      proffessional_at1: ProAt1,
    },
  });

  let ProAt2 = Order.find({
    where: {
      proffessional_at2: ProAt2,
    },
  });

  let DocumentCreated = Order.find({
    where: {
      document_created: DocumentCreated,
    },
  });

  let StatusId = Order.find({
    where: {
      status: StatusId,
    },
  });

  let WinBd = Order.find({
    where: {
      bd: WinBd,
    },
  });

  let ErpOrder = Order.find({
    where: {
      erp_order: ErpOrder,
    },
  });

  let DocumentCreated = Order.find({
    where: {
      document_created: DocumentCreated,
    },
  });

  let ErpReq = Order.find({
    where: {
      erp_req: ErpReq,
    },
  });

  let INVC = Order.find({
    where: {
        invc: INVC
    }
  });

  //order_type - pullingbag

  let DocumentCreated = Order.find({
    where: {
        document_created: DocumentCreated
    }
  });

  let Need = Order.find({
    where: {
        need: Need
    }
  });

  //paka

  let Budjet = Order.find({
    where: {
        budjet: Budjet
    }
  });

  let EndDate = Order.find({
    where: {
        schedule: EndDate
    }
  });
  
  //assignment_id

  let StartDate = Order.find({
    where: {
        start_date: StartDate
    }
  });

  let InvitorId = Order.find({
    where: {
        invitor: InvitorId
    }
  });

  let BimCommaderId = Order.find({
    where: {
        bim_commander_id:BimCommaderId
    }
  });

  let ProffessionalId = Order.find({
    where: {
        proffessional_id: ProffessionalId
    }
  });

  let IsInvitor = Order.find({
    where: {
        is_invitor: IsInvitor
    }
  });

  let IsCmdr = Order.find({
    where: {
        is_cmdr: IsCmdr
    }
  });



  res.json(response);
};

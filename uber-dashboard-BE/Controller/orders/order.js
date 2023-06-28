import orders from "../../Schema/orders/orders.js";
import Orders from "../../Schema/orders/orders.js";
import jwt from 'jsonwebtoken'
///Add new menu item
export const createOrder = async (req, res, next) => {
  const newOrder = new Orders(req.body);
  try {
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    next(err);
  }
};

// get all orders
export const  getAllOrders  = async (req, res, next) => {
  try {
    
    const order = await orders.find({}, { _id: 0 }).lean()
    res.status(200).json(order);
  } catch (err) {
    console.log("coem in err")
    next(err);
  }
};
export const getOrdersById = async (req, res, next) => {
  try {
    const order = await Orders.findOne({orderID: req.params.id});
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};
//delete order 
export const deleteOrder = async (req, res, next) => {
  try {
    await Orders.findOneAndDelete({orderID:req.params.id});
    res.status(200).json("order has been deleted");
  } catch (err) {
    next(err);
  }
};

//update order
export const updateOrders = async (req, res, next) => {
  const filter = { id: req.params.id };
  const update = req.body;
  
  try {
    const updatedOrders = await Orders.findOneAndUpdate(filter,update, {
      returnOriginal: false,
      projection: { _id: 0},
   });
    res.status(200).json(updatedOrders);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
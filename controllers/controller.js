const ordersDB = require("../model/orderSchema");

async function createOrder(req,res){
  try{
    const data = req.body;
    const insertOrder = new ordersDB(data);
    await insertOrder.save()
    return res.status(200).send('successfully created')
  }catch(e){
    console.error(e)
    if(e.index==0){
      return res.status(200).send("orderId already exist")
    }
    return res.status(401).send(e)
  }
}

async function updateOrder(req,res){
  try{
    const data = req.body;
    await ordersDB.findOneAndUpdate({order_id:data.order_id},{delivery_date:data.delivery_date})
    return res.status(200).send("succesfully updated date")
  }catch(e){
    return res.status(401).send(e)
  }
}

async function getOrders(req,res){
  try{
    const data = req.body;
    let result = await ordersDB.find({delivery_date:data.delivery_date})
    console.log(result)
    if(!result){
      return res.status(200).send("no order with this id found")
    }
    return res.status(200).send(result)
  }catch(e){
    console.error(e)
    return res.status(401).send(e)
  }
}

async function findOrder(req,res){
  try{
    const id = req.params.orderId;
    let result = await ordersDB.findOne({order_id:id})
    if(!result){
      return res.status(200).send("no record found")
    }
    return res.status(200).send(result)
  }catch(e){
    console.log(e)
    return res.status(401).send(e)
  }
}

async function deleteOrder(req,res){
  try{
    const id = req.params.orderId;
    await ordersDB.deleteOne({order_id:id})
    return res.status(200).send("successfully removed")
  }catch(e){
    res.status(401).send(e)
  }
}

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  findOrder,
  getOrders
}
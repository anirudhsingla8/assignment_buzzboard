const express = require("express");
const mongoose = require("mongoose");
const route = require('./routes/routes');
const app = express();

app.use(express.json());

const MONGO_URL = `mongodb+srv://order:order@cluster0.lcda6.mongodb.net/ordersDB?retryWrites=true&w=majority`;
async function startMongo(){
  await mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
}

app.use('/orders',route);
const PORT = 3000;
async function startServer(){
  try{
    await startMongo();
    app.listen(PORT,()=>{
    console.log(`success connected on ${PORT}`)
  })
  }catch(e){
    console.error(e)
  }
  
}

startServer()


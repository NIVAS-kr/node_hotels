const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/hotels";
mongoose.connect(mongoURL,{
 
})
const db = mongoose.connection;
db.on('connected',()=>{
  console.log('connected to MongoDB server');
});
db.on('error', ()=>{
  console.log('MOngoDB connection error:');
});
db.on('disconnected',()=>{
  console.log('MongoDB disconnected');
});
module.exports=db;
//comment added for testing purpose
const express= require('express')
const app= express();
 app.get('/', function (req,res){
  res.send('sure sir, i would love to serve chickenrwe')
 })

 app.listen(3000, ()=>{
  console.log('listening on port 3000');
 })
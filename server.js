const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/person");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World.... hello i can help you?");
});
app.post("/person", async(req, res) => {
try{
  const data= req.body
  const newPerson= new Person(data);
 const response = await newPerson.save();
 console.log('data saved');
 res.status(200).json(response);
  }

catch(err){
  console.log(err);
  res.status(500).json({error:'internal server Error'});
}
})




app.listen(3000, () => {
  console.log("server is listening");
});

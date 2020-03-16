const mongoose = require("mongoose");
const express = require("express");
const keys = require("./config/keys");
const hotelRooms = require('./routes/api/hotels')
<<<<<<< HEAD
const Joi = require('joi');
=======
const Joi = require('joi'); 
>>>>>>> 89576cb96e1ceb6b8e6d9b11a7a201783712bb07

const app = express();

app.use(express.json());

mongoose
<<<<<<< HEAD
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true  })
=======
  .connect(keys.mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
>>>>>>> 89576cb96e1ceb6b8e6d9b11a7a201783712bb07
  .then(() => console.log("connected to db"))
  .catch(error => console.log("DB Connection error", error));

app.use(express.static("public"));
<<<<<<< HEAD
app.use('/api/nasa', hotelRooms);
=======
app.use('/api/nasa', hotelRooms); 
>>>>>>> 89576cb96e1ceb6b8e6d9b11a7a201783712bb07

app.listen(3000, () => console.log("listening on port 3000"));

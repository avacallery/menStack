const { Hotel, validate } = require('../../models/Hotel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send({msg: "Works"});
// });

router.get('/', async(req, res) => {
    const hotelRooms = new Hotel(Hotel.rooms); 
    const doc = await hotelRooms.save()
    console.log(doc)
    res.send(hotelRooms); 

});

module.exports = router; 
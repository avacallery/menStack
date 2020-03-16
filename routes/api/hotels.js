const { hotelSchema } = require('../../models/Hotel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const name = await hotelSchema.find();
    res.send(name);
});

router.post('/', async (req, res) => {
    let hotelRoom = new hotelSchema({
        // checkIn: req.body.checkIn,
        // checkOut: req.body.checkOut,
        numberOfNights: req.body.numberOfNights,
        room: req.body.room
    });

    hotelRoom = await hotelRoom.save();
    console.log(hotelRoom); 
    res.send(hotelRoom);
});
  
module.exports = router; 

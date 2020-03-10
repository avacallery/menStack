const { hotelSchema } = require('../../models/Hotel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send({msg: "Works"});
// });

// router.get('/', async(req, res) => {
//     const hotelRooms = new hotelSchema(hotelSchema.rooms); 
//     const doc = await hotelRooms.save()
//     console.log(doc)
//     res.send(hotelRooms); 

// });

router.get('/', async (req, res) => {
    const name = await hotelSchema.find().sort('name');
    res.send(name);
});

router.post('/', async (req, res) => {
    // const { error } = validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    let hotelRoom = new hotelSchema({
        // checkIn: req.body.checkIn,
        // checkOut: req.body.checkOut,
        // numberOfNights: req.body.numberOfNights,
        // adults: req.body.adults,
        // children: req.body.chilren,
        // rooms: req.body.rooms
        name: req.body.name
    });

    hotelRoom = await hotelRoom.save();
    console.log(hotelRoom); 
    res.send(hotelRoom);
});



module.exports = router; 
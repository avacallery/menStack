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

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let hotelRoom = new Hotel({
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        numberOfNights: req.body.numberOfNights,
        adults: req.body.adults,
        children: req.body.chilren,
        rooms: req.body.rooms
    });

    hotelRoom = await hotelRoom.save();

    res.send(hotelRoom);
});



module.exports = router; 
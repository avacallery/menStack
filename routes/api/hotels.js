const { hotelSchema } = require('../../models/Hotel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send({msg: "Works"});
// });

router.get('/', async (req, res) => {
    const name = await hotelSchema.find();
    res.send(name);
});

router.post('/', async (req, res) => {

    let hotelReservation = new hotelSchema({
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        numberOfNights: req.body.numberOfNights,
        room: req.body.room
    });

    hotelReservation = await hotelReservation.save();
    console.log(hotelReservation); 
    res.send(hotelReservation);
});

router.get('/:id', async (req, res) => {
    const hotelRoom = await hotelSchema.findById(req.params.id);
    if (!hotelRoom) return res.status(404).send('The reservation with the given ID was not found.');
    res.send(hotelRoom);
})

module.exports = router; 
<<<<<<< HEAD
const { hotelSchema } = require('../../models/Hotel');
=======
const { Hotel, validate } = require('../../models/Hotel');
>>>>>>> 89576cb96e1ceb6b8e6d9b11a7a201783712bb07
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

<<<<<<< HEAD
// router.get('/', (req, res) => {
//     res.send({msg: "Works"});
// });

router.get('/', async(req, res) => {
    const hotelRooms = new hotelSchema(hotelSchema.rooms); 
    const doc = await hotelRooms.save()
    console.log(doc)
    res.send(hotelRooms); 

});

router.post('/', async (req, res) => {
    // const { error } = validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    let hotelRoom = new hotelSchema({
        // checkIn: req.body.checkIn,
        // checkOut: req.body.checkOut,
        // numberOfNights: req.body.numberOfNights,
        // adults: req.body.adults,
        // children: req.body.children,
=======
router.get('/', (req, res) => {
    res.send({msg: "Works"});
});

// router.get('/', async(req, res) => {
//     const hotelRooms = new Hotel(Hotel.rooms);
//     const doc = await hotelRooms.save()
//     console.log(doc)
//     res.send(hotelRooms);
//
// });

router.post('/', async (req, res) => {
    // test array i posted was: "rooms" : "['Deluxe Suite',101]"
    console.log(req.body)
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let hotelRoom = new Hotel({
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        numberOfNights: req.body.numberOfNights,
        adults: req.body.adults,
        children: req.body.children,
>>>>>>> 89576cb96e1ceb6b8e6d9b11a7a201783712bb07
        rooms: req.body.rooms
    });

    hotelRoom = await hotelRoom.save();

    res.send(hotelRoom);
});



<<<<<<< HEAD
module.exports = router; 
=======
module.exports = router; 
>>>>>>> 89576cb96e1ceb6b8e6d9b11a7a201783712bb07

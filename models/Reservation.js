const mongoose = require('mongoose');
const { hotelRoomSchema } = require("./Room");

const reservationSchema = mongoose.model('Reservation', new mongoose.Schema({
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    numberOfNights: {
        type: Number
    }, 
    rooms: [hotelRoomSchema]
}));  

exports.reservationSchema = reservationSchema;
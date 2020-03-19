const mongoose = require('mongoose');
const { reservationSchema } = require("./Reservation");

module.exports = mongoose.model(
    "Hotel", new mongoose.Schema({
        name: {
            type: String
        },
        location: {
            type: String
        },
        reservation: [reservationSchema]
    })
);

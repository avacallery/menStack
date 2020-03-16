const mongoose = require('mongoose');
const { hotelRoomSchema } = require("./hotelRoom");

module.exports = mongoose.model(
    "Hotel", new mongoose.Schema({
        name: {
            type: String
        },
        location: {
            type: String
        },
        rooms: [hotelRoomSchema]
    })
);

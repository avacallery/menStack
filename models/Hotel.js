const Joi = require('joi');
const mongoose = require('mongoose');

const Hotel = mongoose.model('Hotel', new mongoose.Schema({
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    numberOfNights: {
        type: Number,
        required: false
    },
    adults: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: false
    },
    rooms: {
        type: String + Array,
        roomsByType: [
            {roomType: 'Deluxe Suite', roomNumbers: [101, 103, 106, 109, 112]},
            {roomType: 'Executive Suite', roomNumbers: [202, 204, 206, 208, 210]},
            {roomType: 'Terrace Suite', roomNumbers: [304, 308, 312, 316]},
            {roomType: 'Penthouse Suite', roomNumbers: [400, 410, 420]}
        ]
    }
}));

function validateHotelRooms(hotel) {

    const schema = {
        checkIn:Joi.Date().required(),
        checkOut:Joi.Date().required(),
        numberOfNights:Joi.Number().required(false),
        adults:Joi.Number().required(),
        children:Joi.Number().required(),
        rooms:Joi.String().Array().required()

    };
    return Joi.validate(hotel, schema);
}

exports.Hotel = Hotel;
exports.validate = validateHotelRooms; 
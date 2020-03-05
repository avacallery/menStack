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
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: false
    }
}));

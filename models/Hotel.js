const Joi = require('joi');
const mongoose = require('mongoose');

const hotelSchema = mongoose.model('Hotel', new mongoose.Schema({
    // checkIn: {
    //     type: Date,
    //     required: true
    // },
    // checkOut: {
    //     type: Date,
    //     required: true
    // },
    numberOfNights: {
        type: Number
    }, 
    room: {
        roomType: {
        type: String
        }, 
        roomNumber: {
        type: Number 
        }
    }
}));  

exports.hotelSchema = hotelSchema;

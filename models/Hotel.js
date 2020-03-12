const Joi = require('joi');
const mongoose = require('mongoose');

// ar ToySchema = new Schema({ name: String });
// var ToyBoxSchema = new Schema({
//     toys: [ToySchema],
//     buffers: [Buffer],
//     strings: [String],
//     numbers: [Number]
var roomSchema = new mongoose.Schema({
    name: String,
    roomNum: Number
})

const Hotel = mongoose.model( 'Hotel', new mongoose.Schema({

    // checkIn: {
    //     type: Date,
    //     required: true
    // },
    // checkOut: {
    //     type: Date,
    //     required: true
    // },
    // numberOfNights: {
    //     type: Number,
    //     required: false
    // },
    // adults: {
    //     type: Number,
    //     required: true
    // }//,
    // children: {
    //     type: Number,
    //     required: false
    // }
    rooms: {
        type: [roomSchema],        // ex: ["Deluxe Suite", 101]
        default: undefined,
        required: true
    }

    // this was also said to work
    //
    // rooms: [{
    //     name: String,
    //     roomNum: Number
    // }]

}));



function validateHotelRooms(hotel) {

    const schema = Joi.object().keys({
        // checkIn:Joi.Date().required(),
        // checkOut:Joi.Date().required(),
        // numberOfNights:Joi.Number().required(false),
        // adults:Joi.Number().required(),
        // // children:Joi.Number().required(false),
        rooms:[Joi.string(),Joi.number()]
    })
    // return Joi.validate(hotel, schema);
    return true
}

exports.Hotel = Hotel;
exports.validate = validateHotelRooms; 

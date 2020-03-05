const express = require('express'); 
const router = express.Router(); 
const hotelRoom = require('../../models/Hotel.js')

router.get('/', (req, res) => {
    res.send({msg: "Works"});
});

router.get('/', (req, res) => {
    res.send()
})

module.exports = router; 
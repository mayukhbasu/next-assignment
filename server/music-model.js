const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: number
    },
    album: {
        type: String,
        required: number 
    }
});

module.exports = mongoose.model("Music", musicSchema);
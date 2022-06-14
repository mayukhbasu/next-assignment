const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true 
    }
});

module.exports = mongoose.model("Music", musicSchema);
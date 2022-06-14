const mongoose = require("mongoose");
const Music = require('./music-model');
mongoose.connect("mongodb+srv://rishiwhite11:nataliE@2447@cluster0.urkee.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", async () => {
    if ((await Music.countDocuments().exec()) > 0) {
        console.log("Error");
        return;
    }
    
    
    Promise.all([
        Music.create({ index: 1, song: "Hey You", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 2, song: "In the Flesh?", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 3, song: "The Thin Ice", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 4, song: "Mother" , artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 5, song: "Another Brick in the Wall, Part 3", artist: "Pink Floyd", album: "The Wall" }),
        Music.create({ index: 6, song: "Goodbye Cruel World", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 7, song: "Welcome to the Machine", artist: "Pink Floyd", album: "Wish You Were Here" }),
        Music.create({ index: 8, song:  "Shine On You Crazy Diamond", artist: "Pink Floyd", album: "Wish You Were Here"}),
        Music.create({ index: 9, song:  "Cluster One", artist: "Pink Floyd", album: "The Division Bell"}),
        Music.create({ index: 10, song: "Marooned",  artist: "Pink Floyd", album: "The Division Bell" }),
        Music.create({ index: 11, song: "What Do You Want from Me", artist: "Pink Floyd", album: "The Division Bell" }),
        Music.create({ index: 12, song: "Coming Back To Life", artist: "Pink Floyd", album: "The Division Bell"}),
      ]).then(() => console.log("Added All Users"));
})
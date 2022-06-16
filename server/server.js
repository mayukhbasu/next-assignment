const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const app = express();


const Music = require('./music-model');
mongoose.connect("mongodb+srv://rishiwhite11:nataliE@2447@cluster0.urkee.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.connect('mongodb://localhost:27017/music', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

const db = mongoose.connection;
app.use(cors());
db.once("open", async () => {
    if ((await Music.countDocuments().exec()) > 0) {
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
        Music.create({ index: 1, song: "Hey You", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 2, song: "In the Flesh?", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 3, song: "The Thin Ice", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 4, song: "Mother" , artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 12, song: "Coming Back To Life", artist: "Pink Floyd", album: "The Division Bell"}),
        Music.create({ index: 1, song: "Hey You", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 2, song: "In the Flesh?", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 3, song: "The Thin Ice", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 4, song: "Mother" , artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 12, song: "Coming Back To Life", artist: "Pink Floyd", album: "The Division Bell"}),
        Music.create({ index: 1, song: "Hey You", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 2, song: "In the Flesh?", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 3, song: "The Thin Ice", artist: "Pink Floyd", album: "The Wall"}),
        Music.create({ index: 4, song: "Mother" , artist: "Pink Floyd", album: "The Wall"}),
      ]).then(() => console.log("Added All User"));
});

const paginatedResults = () => {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const searchText = req.query.search;
        const skipIndex = (page - 1) * limit;
        const results = {};
        console.log(searchText);
        try {
          results.results = await Music.find({
                $or: [
                    { 'song': { '$regex': searchText, '$options': 'i' } },
                    { 'album': { '$regex': searchText, '$options': 'i' } },
                    { 'artist': { '$regex': searchText, '$options': 'i' } }
                ]
              })
            .sort({ _id: 1 })
            .limit(limit)
            .skip(skipIndex)
            .exec();
          res.paginatedResults = results;
          next();
        } catch (e) {
          res
            .status(500)
            .json({ message: "Error Occured while fetching the data" });
        }
      };
}
app.get("/users", paginatedResults(), (req, res) => {
    res.json(res.paginatedResults);
});


console.log("Server Started!");
app.listen(3000);
# next-assignment

Installation guide and test:
1. You should have nodejs installed in your local machine
2. Extract the zip, you should be having two folders, music-app for client(React) , server(NodeJS)
3. Go inside each folder and run npm install respectively
4. Now go inside each folder and run npm start respectively, open http://localhost:3000 to access the UI
5. This project uses mongodb for pagination from backend.
6. For searching song this is the complete set of data

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
        Music.create({ index: 13, song: "Hysteria", artist: "Def Leppard", album: "Hysteria"}),
        Music.create({ index: 14, song: "Love Bites", artist: "Def Leppard", album: "Hysteria"}),
        Music.create({ index: 15, song: "Women", artist: "Def Lepard", album: "Hysteria"}),
        Music.create({ index: 16, song: "Animal" , artist: "Def Leppard", album: "Hysteria"}),
        Music.create({ index: 17, song: "Beautiful Day", artist: "U2", album: "Best of U2"}),
        Music.create({ index: 18, song: "Numb", artist: "U2", album: "Best of U2"}),
        Music.create({ index: 19, song: "Acrobat", artist: "U2", album: "Best of U2"}),
        Music.create({ index: 20, song: "North and South of the River", artist: "U2", album: "Best of U2"}),
        Music.create({ index: 21, song: "Pride (In the Name of Love)" , artist: "U2", album: "Best of U2"}),
        Music.create({ index: 22, song: "I Will Follow", artist: "U2", album: "Best of U2"}),
        Music.create({ index: 23, song: "Moment of Surrender", artist: "U2", album: "Best of U2"}),
        Music.create({ index: 24, song: "With or Without You", artist: "U2", album: "Best of U2"});

7. To see more than 10 records are infinite scrolling search with p
8. 
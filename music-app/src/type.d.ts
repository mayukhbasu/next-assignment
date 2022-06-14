interface SongDetails {
    _id: string,
    index: number,
    song: string,
    artist: string,
    album: string,
    __v: 0
}


type SongDetailsState =  {
    songs: SongDetails[]
}





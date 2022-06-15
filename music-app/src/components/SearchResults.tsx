import React, { FormEvent} from 'react';

import './SearchResults.css';

type ShowSongsProps = {
    songs: SongDetails[]
    sendRequest: () => void
}
const SearchResults: React.FC<ShowSongsProps> = ({songs, sendRequest}) => {
    const loadMoreData = (e: FormEvent) => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop
         === e.currentTarget.clientHeight;
        if(bottom){
            sendRequest();
        }
    }
    return (
        <>
            <div className='songs-table' onScroll={loadMoreData}>
            <table>
                <thead>
                <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                </tr>
                </thead>

                <tbody>
                    {
                        songs.map(song => (
                            <tr key={song._id}>
                                <td>{song.song}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
           
        </>
    );
};

export default SearchResults;
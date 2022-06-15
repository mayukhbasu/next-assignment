import React, { FormEvent} from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { SongDetailsState } from '../store/actionTypes';

import './SearchResults.css';

type ShowSongsProps = {
    songs: SongDetails[]
    sendRequest: (search:string, pageNo: number) => void
}
const SearchResults: React.FC<ShowSongsProps> = ({songs, sendRequest}) => {
    let songDetails;
    const songSearch = useSelector((state:SongDetailsState) => state.searchString, shallowEqual) || '';
    const pageNo = useSelector((state:SongDetailsState) => state.pageNo, shallowEqual);
    
    const loadMoreData = (e: FormEvent) => {
        e.preventDefault();
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop
         <= e.currentTarget.clientHeight + 5;
        if(bottom){
            let newPageNo: number = pageNo + 1;
            sendRequest(songSearch, newPageNo);
        }
    }
    if(songs.length > 0){
        songDetails =  <table>
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
    } else {
        songDetails = <h4>No Songs Match Your Search</h4>
    }
    return (
        <>
            <div className='songs-table' onScroll={loadMoreData}>
                {songDetails}
            </div>
           
        </>
    );
};

export default SearchResults;
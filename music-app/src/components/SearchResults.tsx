import React, { FormEvent} from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { SongDetailsState } from '../store/actionTypes';

import './SearchResults.css';

type ShowSongsProps = {
    songs: SongDetails[]
    sendRequest: (search:string, pageNo: number) => void
}
const SearchResults: React.FC<ShowSongsProps> = ({songs, sendRequest}) => {
    const songSearch = useSelector((state:SongDetailsState) => state.searchString, shallowEqual) || '';
    const pageNo = useSelector((state:SongDetailsState) => state.pageNo, shallowEqual);
    const loadMoreData = (e: FormEvent) => {
        e.preventDefault();
        let newPageNo: number = pageNo + 1;
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop
         <= e.currentTarget.clientHeight + 2 ;
        if(bottom){
            
            sendRequest(songSearch, newPageNo);
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
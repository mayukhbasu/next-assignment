import { FormEvent, useState } from 'react';
import './Search.css';
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { findSongs } from '../store/actionCreators';

// type SearchProps = {

// }
const Search = () => {
    const [songSearch, setSongSearch] = useState('');
    const dispatch: Dispatch<any> = useDispatch()
    const changeSong = (e: FormEvent<HTMLInputElement>) => {
        setSongSearch(e.currentTarget.value)
    }
    const searchSongs = () => dispatch(findSongs(songSearch))
    return (
        <div className='header'>
            <h4>Search Music</h4>
            
                <div className="row">
                    <form className="offset-s3 col s6">
                        <div className="input-field col s12">
                            
                            <input id="email" type="email" className="validate" value={songSearch}
                            onChange={changeSong} placeholder="Search Songs"/>
                            
                            <i className="material-icons prefix" onClick={searchSongs}>search</i>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Search;
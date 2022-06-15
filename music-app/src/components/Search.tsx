import { FormEvent, useState } from 'react';
import './Search.css';


type SearchProps = {
    searchSongs: (songSearch: string) => void
}
const Search:React.FC<SearchProps> = ({searchSongs}) => {
    const [songSearch, setSongSearch] = useState('');
    const changeSong = (e: FormEvent<HTMLInputElement>) => {
        setSongSearch(e.currentTarget.value)
    }
    const findSongs = () => {
        searchSongs(songSearch)
    }
    return (
        <div className='header'>
            <h4>Search Music</h4>
            
                <div className="row">
                    <form className="offset-s3 col s6">
                        <div className="input-field col s12">
                            
                            <input id="text" type="email" className="validate" value={songSearch}
                            onChange={changeSong} placeholder="Search Songs"/>
                            
                            <i className="material-icons prefix" onClick={findSongs}>search</i>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Search;
import { FormEvent, useState } from 'react';
import './Search.css';


type SearchProps = {
    searchSongs: (songSearch: string) => void
}
const Search:React.FC<SearchProps> = ({searchSongs}) => {
    let iconShow: boolean = false;
    const [songSearch, setSongSearch] = useState('');
    const changeSong = (e: FormEvent<HTMLInputElement>) => {
        setSongSearch(e.currentTarget.value)
    }
    if(songSearch.trim().length < 1){
        iconShow = false
    } else {
        iconShow = true
    }
    const findSongs = () => {
        searchSongs(songSearch)
    }
    return (
        <div className='header'>
            <h4>Welcome to Harmony</h4>
            
                <div className="row">
                    <form className="offset-s3 col s6">
                        <div className="input-field col s12">
                            
                            <input type="text" id='searchSong' className="validate" value={songSearch}
                            onChange={changeSong} data-testid="searchSong" placeholder="Search"/>
                            
                            {
                                iconShow && <i data-testid="findSong" className="material-icons prefix" onClick={findSongs}>search</i>
                            }
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Search;
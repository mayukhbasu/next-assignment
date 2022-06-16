import { FormEvent, useState } from 'react';
import './Search.css';


type SearchProps = {
    searchSongs: (songSearch: string) => void
}
const Search:React.FC<SearchProps> = ({searchSongs}) => {
    let searchIcon;
    let M:any;
    const [songSearch, setSongSearch] = useState('');
    const changeSong = (e: FormEvent<HTMLInputElement>) => {
        setSongSearch(e.currentTarget.value)
    }
    if(songSearch.length < 3){
        searchIcon = ''
    } else {
        
    }
    const findSongs = () => {
        if(songSearch.length < 3){
            
            return;
        }
        searchSongs(songSearch)
    }
    return (
        <div className='header'>
            <h4>Welcome to Harmony</h4>
            
                <div className="row">
                    <form className="offset-s3 col s6">
                        <div className="input-field col s12">
                            
                            <input id="text" type="email" className="validate" value={songSearch}
                            onChange={changeSong} placeholder="Search Songs.. (Min 3 Characters)" minLength={3}/>
                            
                            <i className="material-icons prefix" onClick={findSongs}>search</i>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Search;
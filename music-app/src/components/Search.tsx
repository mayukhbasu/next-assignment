import { FormEvent, useState, KeyboardEvent } from 'react';
import './Search.css';


type SearchProps = {
    searchSongs: (songSearch: string) => void
}
//This component represents the header section for our music app
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

    //Search function when we click the search icon
    const findSongs = () => {
        searchSongs(songSearch)
    }

    //Search functionality after pressing enter
    const findSongsAfterEnterPress = (e?: KeyboardEvent<HTMLInputElement>) => {
        
        if(e?.key === "Enter"){
            e?.preventDefault();
            searchSongs(songSearch)
        }
    }
    return (
        <div className='header'>
            <h4>Welcome to Harmony</h4>
            
                <div className="row">
                    <form className="offset-s3 col s6">
                        <div className="input-field col s12">
                            
                            <input type="text" id='searchSong' className="validate" value={songSearch} onKeyDown={findSongsAfterEnterPress}
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
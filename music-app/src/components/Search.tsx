import { FormEvent, useState } from 'react';
import './Search.css'

type SearchProps = {

}
const Search = () => {
    const [songSearch, setSongSearch] = useState('');
    const changeSong = (e: FormEvent<HTMLInputElement>) => {
        setSongSearch(e.currentTarget.value)
    }
    return (
        <div className='header'>
            <h4>Search Music</h4>
            
                <div className="row">
                    <form className="offset-s3 col s6">
                        <div className="input-field col s12">
                            
                            <input id="email" type="email" className="validate" value={songSearch}
                            onChange={changeSong} placeholder="Search Songs"/>
                            
                            <i className="material-icons prefix">search</i>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Search;
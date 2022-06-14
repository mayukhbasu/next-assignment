import React from 'react';

const Search = () => {
    return (
        <div>
            <h2>Search Music</h2>
            <div className='container'>
                <div className="row">
                    <form className="offset-s3 col s6">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Search Songs</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;
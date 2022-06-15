import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import { SongDetailsState } from '../store/actionTypes';

const SearchContainer: React.FC = () => {
    const initialSongs:SongDetails[] = [];
    const songs: SongDetails[]  =  useSelector((state:SongDetailsState) => state.songs, shallowEqual) || [];
    let updatedSongs = [...initialSongs, ...songs];

    const loadMoreData = () => {
        console.log("Load More Data")
    }

    const searchSongs = () => {
        
    }
    return (
        <>
           <Search searchSongs={searchSongs}/>
           <SearchResults songs={updatedSongs} sendRequest={loadMoreData}/>
        </>
    );
};


export default SearchContainer;
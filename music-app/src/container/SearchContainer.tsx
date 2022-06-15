import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import { SongDetailsState } from '../store/actionTypes';

const SearchContainer: React.FC = () => {
    const songs: SongDetails[]  =  useSelector((state:SongDetailsState) => state.songs, shallowEqual) || [];
    console.log(songs)
    return (
        <>
           <Search/>
           <SearchResults/>
        </>
    );
};


export default SearchContainer;
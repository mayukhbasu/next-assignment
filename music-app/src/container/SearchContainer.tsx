import React, { Dispatch, useCallback} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import { findSongs } from '../store/actionCreators';
import { SongDetailsState } from '../store/actionTypes';

//Container component holding both search and searchResults
const SearchContainer: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const songs: SongDetails[]  =  useSelector((state:SongDetailsState) => state.songs, shallowEqual) || [];
    
    //Load more data function connecting to action
    const loadMoreData = (searchString: string, pageNo:number) => dispatch(findSongs(searchString, false, pageNo))
   
    const searchSongs = useCallback(
        (searchString: string) => dispatch(findSongs(searchString, true, 1)),
        [dispatch]
      )
    
    return (
        <>
           <Search searchSongs={searchSongs}/>
           <SearchResults songs={songs} sendRequest={loadMoreData}/>
        </>
    );
};


export default SearchContainer;
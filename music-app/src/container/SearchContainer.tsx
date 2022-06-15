import React, { Dispatch, useCallback} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import { findSongs } from '../store/actionCreators';
import { SongDetailsState } from '../store/actionTypes';

const SearchContainer: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const songs: SongDetails[]  =  useSelector((state:SongDetailsState) => state.songs, shallowEqual) || [];
    const loadMoreData = (searchString: string, pageNo:number) => dispatch(findSongs(searchString, pageNo))
   
    const searchSongs = useCallback(
        (searchString: string) => dispatch(findSongs(searchString)),
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
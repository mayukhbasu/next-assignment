import { Action, ActionType, SongDetailsState } from "./actionTypes";



const initialState:SongDetailsState = {
    songs: [],
    loading: false,
    error: null,
    pageNo: 1,
    searchString: "",
    newSearch: true
}
//Reducer to update the newly fetched data into the state from the backend
export const songsReducer = (state: SongDetailsState = initialState, action: Action):SongDetailsState  => {
    switch(action.type) {
        case ActionType.SEARCH_SONGS_PENDING:
            return {
                ...state,
                loading: true,
            }
        //If new search is true, then concat action payload with blank array, else concat with the prev state
        case ActionType.SEARCH_SONGS_SUCCESS:
            return {
                ...state,
                loading: false,
                songs: action.newSearch? ([] as SongDetails[]).concat(action.payload) : state.songs?.concat(action.payload),
                error: null,
                pageNo: action.pageNo,
                searchString: action.searchString
            }
        //When error happens , returning a string containing error
        case ActionType.SEARCH_SONGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
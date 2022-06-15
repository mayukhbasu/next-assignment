import { Action, ActionType, SongDetailsState } from "./actionTypes";



const initialState:SongDetailsState = {
    songs: [],
    loading: false,
    error: null,
    pageNo: 1,
    searchString: "",
    newSearch: true
}

export const songsReducer = (state: SongDetailsState = initialState, action: Action):SongDetailsState  => {
    switch(action.type) {
        case ActionType.SEARCH_SONGS_PENDING:
            return {
                ...state,
                loading: true,
            }
        case ActionType.SEARCH_SONGS_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                songs: action.newSearch? ([] as SongDetails[]).concat(action.payload) : state.songs?.concat(action.payload),
                error: null,
                pageNo: action.pageNo,
                searchString: action.searchString
            }
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
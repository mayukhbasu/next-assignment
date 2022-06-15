import { Action, ActionType, SongDetailsState } from "./actionTypes";



const initialState:SongDetailsState = {
    songs: [],
    loading: false,
    error: null,
    pageNo: 1,
    searchString: ""
}

export const songsReducer = (state: SongDetailsState = initialState, action: Action):SongDetailsState  => {
    switch(action.type) {
        case ActionType.SEARCH_SONGS_PENDING:
            return {
                ...state,
                loading: true,
            }
        case ActionType.SEARCH_SONGS_SUCCESS:
            return {
                ...state,
                loading: false,
                songs: state.songs?.concat(action.payload),
                error: null
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
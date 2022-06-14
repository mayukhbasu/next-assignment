import { Action, ActionType } from "./actionTypes";

interface SongDetailsState {
    songs?: SongDetails[];
    loading: boolean;
    error?: string | null
}

const initialState = {
    songs: [],
    loading: false,
    error: null
}

export const songsReducer = (state: SongDetailsState = initialState, action: Action):SongDetailsState  => {
    switch(action.type) {
        case ActionType.SEARCH_SONGS_PENDING:
            return {
                loading: true,
            }
        case ActionType.SEARCH_SONGS_SUCCESS:
            return {
                loading: false,
                songs: action.payload,
                error: null
            }
        case ActionType.SEARCH_SONGS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
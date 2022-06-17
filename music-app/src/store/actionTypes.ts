
export enum ActionType {
    SEARCH_SONGS_PENDING = "SEARCH_SONGS_PENDING",
    SEARCH_SONGS_SUCCESS = "SEARCH_SONGS_SUCCESS",
    SEARCH_SONGS_FAILURE = "SEARCH_SONGS_FAILURE"

}

//The song details initial state , sending search string, pageno and new search as a response param to 
//send further request that is returned from store, if new search is true we are clearing the array containing
//songs from the current store
export interface SongDetailsState {
    songs?: SongDetails[];
    loading: boolean;
    error?: string | null;
    pageNo: number;
    searchString?: string;
    newSearch?: boolean;
}

export interface ErrorMessage {
    message: string;
}
 
interface actionPending {
    type: ActionType.SEARCH_SONGS_PENDING;
}

interface actionSuccess {
    type: ActionType.SEARCH_SONGS_SUCCESS;
    payload: SongDetails[];
    pageNo: number;
    searchString?: string;
    newSearch?: boolean;
}

interface actionFail {
    type: ActionType.SEARCH_SONGS_FAILURE;
    payload: string ;
}


export type Action = actionPending | actionSuccess | actionFail;
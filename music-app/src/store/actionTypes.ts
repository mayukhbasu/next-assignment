
export enum ActionType {
    SEARCH_SONGS_PENDING = "SEARCH_SONGS_PENDING",
    SEARCH_SONGS_SUCCESS = "SEARCH_SONGS_SUCCESS",
    SEARCH_SONGS_FAILURE = "SEARCH_SONGS_FAILURE"

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
}

interface actionFail {
    type: ActionType.SEARCH_SONGS_FAILURE;
    payload: string ;
}


export type Action = actionPending | actionSuccess | actionFail;
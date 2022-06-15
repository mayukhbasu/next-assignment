import axios from "axios";
import { Dispatch } from "redux";
import { Action, ActionType} from "./actionTypes";

export function findSongs(songSearch: string,newSearch: boolean = true,pageNo:number = 1){
    return async(dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_SONGS_PENDING
        });
        try {
            
            const {results} =  (await axios.get(`http://localhost:3000/users?page=${pageNo}&limit=10&search=${songSearch}`)).data;
            dispatch({
                type: ActionType.SEARCH_SONGS_SUCCESS,
                payload: results,
                pageNo: pageNo,
                searchString: songSearch,
                newSearch
            })
        } catch(err:any){
            dispatch({
                type: ActionType.SEARCH_SONGS_FAILURE,
                payload: err.message
            })
        }
    }
    
}
import axios from "axios";
import { Dispatch } from "redux";
import { Action, ActionType} from "./actionTypes";

//Action to provide search functionality accessing the backend API
export function findSongs(songSearch: string,newSearch: boolean,pageNo:number){
    
    return async(dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_SONGS_PENDING
        });
        try {
            
            const {results} =  (await axios.get(process.env.REACT_APP_API+`${pageNo}&limit=10&search=${songSearch}`)).data;
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
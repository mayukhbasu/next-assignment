import { ActionType } from "../actionTypes";
import { songsReducer } from "../reducers";

describe("Testing the redux components", () => {
    it('it should return the right properties when the action type is pending', () => {
        let state;
        state = songsReducer(undefined, {
            type: ActionType.SEARCH_SONGS_PENDING
        });
        expect(state).toEqual({songs:[],loading:true,error:null,pageNo:1,searchString:'',newSearch:true});
      });
      it('reducers', () => {
        let state;
        state = songsReducer({songs:[],loading:true,error:null,pageNo:1,searchString:'',newSearch:true}, {type: ActionType.SEARCH_SONGS_SUCCESS,payload:[{__v:0,_id:'62aa7c45e187070844feeaf4',index:12,song:'Coming Back To Life',artist:'Pink Floyd',album:'The Division Bell'},{__v:0,_id:'62aa7c45e187070844feeaf9',index:12,song:'Coming Back To Life',artist:'Pink Floyd',album:'The Division Bell'},{__v: 0, _id:'62aa7c45e187070844feeafe',index:12,song:'Coming Back To Life',artist:'Pink Floyd',album:'The Division Bell'}],pageNo:1,searchString:'min',newSearch:true});
        expect(state).toEqual({songs:[{__v:0,_id:'62aa7c45e187070844feeaf4',index:12,song:'Coming Back To Life',artist:'Pink Floyd',album:'The Division Bell'},{__v:0,_id:'62aa7c45e187070844feeaf9',index:12,song:'Coming Back To Life',artist:'Pink Floyd',album:'The Division Bell'},{__v:0,_id:'62aa7c45e187070844feeafe',index:12,song:'Coming Back To Life',artist:'Pink Floyd',album:'The Division Bell'}],loading:false,error:null,pageNo:1,searchString:'min',newSearch:true});
      });
});

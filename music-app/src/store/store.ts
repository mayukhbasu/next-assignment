import { applyMiddleware, createStore } from "redux";
import { songsReducer } from "./reducers";
import thunk from 'redux-thunk';

export const store = createStore(songsReducer, applyMiddleware(thunk))
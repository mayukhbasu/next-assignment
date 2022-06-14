import { applyMiddleware, compose, createStore } from "redux";
import { songsReducer } from "./reducers";
import thunk from 'redux-thunk';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(songsReducer, composeEnhancers(applyMiddleware(thunk)))
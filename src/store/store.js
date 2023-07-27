import { applyMiddleware, createStore, compose } from "redux"
import { weatherState } from "./reducer"
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(weatherState, composeEnhancers(applyMiddleware(thunk)));

export default store;
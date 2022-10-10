import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import logic, { getPersonsApi } from "./logic";

const reducer = combineReducers({
  logic,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

store.dispatch(getPersonsApi());

export default store;

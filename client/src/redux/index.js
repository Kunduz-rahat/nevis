import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./reducers/userReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  "user": userReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )
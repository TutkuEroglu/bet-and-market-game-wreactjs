import counterReducer from "./counter";
import conterReducer from "./conter";
import LoggedReducer from  "./counter";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    Lott: conterReducer,
    Money: counterReducer,
    isLogged: LoggedReducer
})
export default allReducers;
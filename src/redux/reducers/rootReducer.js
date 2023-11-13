
import { combineReducers } from "redux";
import userReducer from './userReducer'
import appReducer from './appReducer'
import notifyReducer from "./notifyReducer";
const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    notify: notifyReducer,
});

export default rootReducer;
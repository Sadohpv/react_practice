
import { combineReducers } from "redux";
import userReducer from './userReducer'
import appReducer from './appReducer'
import notifyReducer from "./notifyReducer";
import chatReducer from "./chatReducer";
const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    notify: notifyReducer,
    chat: chatReducer,
});

export default rootReducer;
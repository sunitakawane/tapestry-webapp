import { combineReducers } from "redux";

import testsReducer from './landingReducers/testsReducer'
import summaryReducer from './landingReducers/summaryReducers'
import userReducer from './userReducers/userReducer'

const rootReducer = combineReducers({
    tests: testsReducer,
    summary: summaryReducer,
    users: userReducer
});

export default rootReducer;
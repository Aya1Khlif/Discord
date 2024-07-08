import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers,createStore,applyMiddleware } from "redux";

const rootReduser =combineReducers({})
const store = createStore(
    rootReduser,
    composeWithDevTools(applyMiddleware())
)
export default store;
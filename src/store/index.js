import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/itemReducer";



const store = createStore(userReducer, applyMiddleware(thunk))

export default store;
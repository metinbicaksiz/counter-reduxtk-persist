import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer} from "redux-persist";
import { combineReducers} from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const reducer = combineReducers({
    counter: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
})

export default store;